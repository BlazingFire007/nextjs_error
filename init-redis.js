const createClient = require('redis').createClient;

const client = createClient({
  socket: {
    host: 'localhost',
    port: 6379,
  },
});

async function main() {
  await client.connect().then(() => console.log('Connected to Redis'));
  await client.lPush('home', '# The home page.\nSub title');
  await client.lPush('ourbeef', '# The second page.\nSub title');
  client.disconnect();
  console.log('Disconnected from Redis');
}

main();
