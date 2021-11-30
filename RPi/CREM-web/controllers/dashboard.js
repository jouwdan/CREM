"use strict";

const logger = require("../utils/logger");
const account = require("./account");
const uuid = require("uuid");

const dashboard = {
    index(request, response) {
        const loggedInUser = account.getCurrentUser(request);
        if(loggedInUser) {
            logger.info("Logged in user: " + loggedInUser.email);
            logger.info("Rendering Dashboard");

            const viewData = {
                title: "CREM | Dashboard",
                loggedInUser: loggedInUser,
            };
            response.render("dashboard", viewData);
        } else {
            response.redirect("/login");
        }
    }
};

module.exports = dashboard;