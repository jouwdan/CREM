"use strict";

const logger = require("../utils/logger");
const userStore = require("../models/user-store");
const account = require("./account");
const uuid = require("uuid");

const dashboard = {
    index(request, response) {
        const loggedInUser = account.getCurrentUser(request);
        if(loggedInUser) {
            logger.info("Logged in user: " + loggedInUser.email);
            logger.info("Rendering Dashboard");
            let userSensors = userStore.getUserSensors(loggedInUser.id);
            for(let i = 0; i < userSensors.length; i++) {
                latestReading = null;
            }
            const viewData = {
                title: "CREM | Dashboard",
                loggedInUser: loggedInUser,
                sensors: userSensors,
            };
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