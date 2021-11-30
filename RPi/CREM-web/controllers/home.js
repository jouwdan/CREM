"use strict";

const logger = require("../utils/logger");

const home = {
    index(request, response) {
        logger.info("rendering homepage");
        const viewData = {
            title: "CREM Home"
        };
        response.render("home", viewData);
    }
};

module.exports = home;