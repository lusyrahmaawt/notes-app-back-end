const Hapi = require('@hapi/hapi')
const routes = require('./src/routes')

const init = async () => {
  const server = Hapi.server({
    port: 2500,
    host: 'localhost',
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();