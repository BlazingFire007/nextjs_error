import Hero from '../components/layout/Hero';
import ContentContainer from '../components/content/ContentContainer';
import ContentWrapper from '../components/content/ContentWrapper';

import { marked } from 'marked';
import { createClient } from 'redis';

export default async function Home() {
  const client = createClient({
    socket: {
      host: 'localhost',
      port: 6379,
    },
  });

  let md = '';
  let error = '';
  try {
    await client.connect().then(() => console.log('Connected to Redis -- /'));
    const data = await client.LRANGE('home', 0, 0);
    md = data[0];
  } catch (e) {
    error = (e as Error).message;
  }
  if (error && typeof window !== 'undefined') alert(error);
  const html = marked(md);
  return (
    <>
      <Hero />
      <ContentContainer>
        <ContentWrapper serverHTML={html as string} />
      </ContentContainer>
    </>
  );
}

export const revalidate = 120;
