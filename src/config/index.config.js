const mongoose = require('mongoose');

const dbConnection = process.env.DB_CONNECTION;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbDatabase = process.env.DB_DATABASE;

const urlConnection = `${dbConnection}://${dbHost}:${dbPort}/${dbDatabase}`;

const connectionDB = async () => {
    try {
        await mongoose.connect(urlConnection);
        console.log('Database connection successful');
    } catch (error) {
        console.log(error);
        throw new Error('Error starting database');
    }
};

module.exports = {
    connectionDB
};