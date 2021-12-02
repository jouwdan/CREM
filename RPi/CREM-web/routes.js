"use strict";

const express = require("express");
const router = express.Router();

const home = require("./controllers/home.js");
const account = require("./controllers/account.js");
const dashboard = require("./controllers/dashboard.js");

router.get("/", home.index);
router.get("/account", account.index);
router.get("/login", account.login);
router.get("/logout", account.logout);
router.get("/register", account.register);
router.get("/dashboard", dashboard.index);

router.post("/registration", account.registration);
router.post("/authentication", account.authentication);
router.post("/dashboard/addsensor", dashboard.addSensor);

module.exports = router;