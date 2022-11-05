import ContentContainer from '../sharedcomponents/ContentContainer';
import NotFoundWrapper from './NotFoundWrapper';

export default function NotFound() {
  return (
    <>
      <div className='mt-24 flex flex-col h-screen'>
        <div className='flex-shrink flex-grow basis-auto'>
          <ContentContainer>
            <NotFoundWrapper />
          </ContentContainer>
        </div>
      </div>
    </>
  );
}
