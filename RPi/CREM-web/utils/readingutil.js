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
    async getDailyHighTemp(sensor) {
        let response = await fetch ('http://localhost:4000/api/day/' + sensor + '/high/temp');
        let reading = await response.json();
        return reading;
    },
    async getDailyLowTemp(sensor) {
        let response = await fetch ('http://localhost:4000/api/day/' + sensor + '/low/temp');
        let reading = await response.json();
        return reading;
    },
    async getLastDay(sensor, time) {
        let response = await fetch ('http://localhost:4000/api/day/' + sensor);
        let reading = await response.json();
        return reading;
    },
};

module.exports = weatherUtil;