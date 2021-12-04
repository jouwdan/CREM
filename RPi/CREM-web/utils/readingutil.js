"use strict";

const fetch = require('node-fetch');
const http = require('http');

const weatherUtil = {
    getLatestReadings(sensors) {
        var latestReadings = [];
        for(let sensor of sensors) {
            http.get('http://localhost:4000/api/latest/' + sensor, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    data = JSON.parse(data);
                    latestReadings.push(data);
                    console.log(latestReadings);
                });
            });
        };
        return latestReadings;
    },
};

module.exports = weatherUtil;