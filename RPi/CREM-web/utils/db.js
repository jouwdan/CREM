"use strict";

const mariadb = require('mariadb');
require('dotenv').config()

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports = {
    getConnection: function() {
        return new Promise(function(resolve,reject) {
            pool.getConnection().then(function(connection) {
                resolve(connection);
            }).catch(function(error) {
                reject(error);
            });
        });
    }
}