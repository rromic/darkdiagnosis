//const { initializeDatabaseInterface, shutdownDatabaseInterface } = require('./dal/db');

const {configureKoa} = require('./server/koa');

const http = require('http');

const main = async () => {

    /* await initializeDatabaseInterface();
    console.log('- Database interface initialized'); */

    const koaConfiguration = await configureKoa();
    console.log('- Koa server configured');
    const server = http.createServer(koaConfiguration.callback());
    server.listen(process.env.PORT || 80);
    console.log('- Server started');
};


main();
