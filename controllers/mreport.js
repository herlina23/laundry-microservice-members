const Member = require("../models/Member");
const User = require("../models/User");
const axios = require("axios");

module.exports = {
  showMember: (req, res) => {
    if (req.user.role == "admin") {
      Member.find()
        .then(mreport => res.json(mreport))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  showUser: (req, res) => {
    if (req.user.role == "admin") {
      User.find()
        .then(mreport => res.json(mreport))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  }
};
