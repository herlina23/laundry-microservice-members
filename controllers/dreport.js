const Member = require("../models/Member");
const User = require("../models/User");

module.exports = {
  showMember: (req, res) => {
    if (req.user.role == "admin") {
      Member.find()
        .then(dreport => res.json(dreport))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  showUser: (req, res) => {
    if (req.user.role == "admin") {
      User.find()
        .then(dreport => res.json(dreport))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  }
};
