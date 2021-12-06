"use strict";

const logger = require("../utils/logger");
const account = require("./account");
const readingutil = require("../utils/readingutil");

const sensor = {
    async index(request, response) {
        const loggedInUser = account.getCurrentUser(request);
        var sensorArray = [];
        const sensorName = request.params.name;
        sensorArray.push(sensorName);
        if(loggedInUser) {
        let latestReading = readingutil.getLatestReadings(sensorArray)
            .then(latestReading => {
                logger.info("Latest Reading: " + (JSON.stringify(latestReading)));

                const viewData = {
                    title: "CREM | " + sensorName,
                    loggedInUser: loggedInUser,
                    sensor: sensorName,
                    latest: latestReading
                };
                logger.info("Rendering Sensor " + sensorName);
                response.render("sensor", viewData);
            });
        } else {
            response.redirect("/login");
        }
    }
};

module.exports = sensor;