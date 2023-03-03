const express = require('express');
const { connectionDB } = require('../../config/index.config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.db_host = process.env.DB_HOST;
        this.paths = {
            user: '/api/user'
        };
        this.db();
        this.middleware();
        this.routes();
    }

    async db() {
        await connectionDB();
    }

    middleware() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.user, require('../../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on: http://localhost:${this.port}`);
        })
    }
};

module.exports = Server;