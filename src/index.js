require('dotenv').config();
const Server = require('./models/server/server.models');

const server = new Server();

server.listen();