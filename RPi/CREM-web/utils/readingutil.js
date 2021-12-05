"use strict";

const fetch = require('node-fetch');
const http = require('http');

const weatherUtil = {
    async getLatestReadings(sensors) {
        var latestReadings = [];
        for(let sensor of sensors) {
            let response = await fetch('http://localhost:4000/api/latest/' + sensor);
            let reading = await response.json();
            let concatArray = latestReadings.concat(reading);
            latestReadings = concatArray;
        };
        return latestReadings;
    },
};

module.exports = weatherUtil;