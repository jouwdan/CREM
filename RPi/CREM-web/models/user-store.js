"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");
const pool = require("../utils/db");

const userStore = {
  store: new JsonStore("./models/user-store.json", { users: [] }),
  collection: "users",

  getAllUsers() {
    return this.store.findAll(this.collection);
  },

  addUser(user) {
    this.store.add(this.collection, user);
    this.store.save();
  },

  getUserById(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  getUserByEmail(email) {
    return this.store.findOneBy(this.collection, { email: email });
  },

  getUserByPassword(password) {
    return this.store.findOneBy(this.collection, { password: password });
  },

  updateUser(loggedInUser, userContent) {
    let user = this.store.findOneBy(this.collection, { id: loggedInUser });
    user.firstName = userContent.firstName;
    user.lastName = userContent.lastName;
    user.email = userContent.email;
    user.password = userContent.password;
    this.store.save();
  },

  addSensor(loggedInUser, sensor) {
    let user = this.store.findOneBy(this.collection, { id: loggedInUser.id })
    if (!user.sensors) {
      user.sensors = [];
    }
    user.sensors.push(sensor);
    this.store.save();
  },

  removeSensor(loggedInUser, sensor) {
    let user = this.store.findOneBy(this.collection, { id: loggedInUser.id })
    const array = user.sensors;
    const index = array.indexOf(sensor);
    if (index > -1) {
      array.splice(index, 1);
    }
    user.sensors = array;
    this.store.save();
  },

  getUserSensors(loggedInUser) {
    let user = this.store.findOneBy(this.collection, { id: loggedInUser });
    return user.sensors;
  },
};

module.exports = userStore;