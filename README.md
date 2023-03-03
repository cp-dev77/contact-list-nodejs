## Installation

You need to have [Node.js](https://nodejs.org/), [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/) and MongoCompass  installed.

To install the dependencies use npm install and to start the server use npm run dev.

```sh
npm install
npm run dev
```

It is also important that you create a Mongo database and in the .env file place the corresponding information.

```sh
PORT=8080 (By default)
DB_CONNECTION=mongodb (By default)
DB_HOST=127.0.0.1 (By default)
DB_PORT=27017 (By default)
DB_DATABASE=name of the created database
```