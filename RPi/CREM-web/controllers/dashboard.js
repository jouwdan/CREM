"use strict";

const logger = require("../utils/logger");
const userStore = require("../models/user-store");
const account = require("./account");
const fetch = require('node-fetch');

const dashboard = {
    index(request, response) {
        const loggedInUser = account.getCurrentUser(request);
        if(loggedInUser) {
            logger.info("Logged in user: " + loggedInUser.email);
            let userSensors = userStore.getUserSensors(loggedInUser.id);
            logger.info(userSensors);
            let latestReadings = [];
            userSensors.forEach(sensor => {
                const getLatestReadings = async () => {
                    logger.info("sensor: " + sensor);
                    const response = await fetch('http://localhost:4000/api/latest/' + sensor);
                    const latestReading = await response.json();
                    logger.info("Latest Reading: " + JSON.stringify(latestReading));
                    latestReadings.push(JSON.stringify(latestReading));
                }
                getLatestReadings();
            });
            logger.info("All Latest Readings: " + latestReadings);
            const viewData = {
                title: "CREM | Dashboard",
                loggedInUser: loggedInUser,
                sensors: userSensors,
                latest: latestReadings,
            };
            logger.info("Rendering Dashboard");
            response.render("dashboard", viewData);
        } else {
            response.redirect("/login");
        }
    },
    addSensor(request, response) {
        const loggedInUser = account.getCurrentUser(request);
        const sensor = request.body.sensor;
        userStore.addSensor(loggedInUser, sensor);
        response.redirect("/dashboard");
      },
};

module.exports = dashboard;