"use strict";

const logger = require("../utils/logger");
const account = require("./account");

const home = {
    index(request, response) {
        const loggedInUser = account.getCurrentUser(request);
        logger.info("rendering homepage");
        const viewData = {
            title: "CREM Home",
            loggedInUser: loggedInUser
        };
        response.render("home", viewData);
    }
};

module.exports = home;