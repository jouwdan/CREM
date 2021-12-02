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
        const newSensor = {
          userid: loggedInUser.id,
          sensor: request.body.sensor,
        };
        userStore.addSensor(newSensor);
        response.redirect("/dashboard");
      },
};

module.exports = dashboard;