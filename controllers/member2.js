const Member = require("../models/Member");

module.exports = {
  index: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Member.find()
        .then(member => res.json(member))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  show: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Member.findById(req.params.id)
        .then(member => res.json(member))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  search: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Member.find({ member_id: req.params.member_id })
        .then(member => res.json(member))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  update: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Member.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body.member },
        { new: true }
      )
        .then(member => res.json(member))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  store: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      let newMem = { ...req.body.member };
      Member.nextCount((err, count) => {
        newMem.member_id = `MEM${count}`;
        Member.create(newMem)
          .then(member => res.json(member))
          .catch(err => console.log(err));
      });
    } else {
      res.sendStatus(403);
    }
  },
  destroy: (req, res) => {
    if (req.user.role == "admin" || req.user.role == "kasir") {
      Member.findOneAndDelete({ _id: req.params.id })
        .then(member => res.json(member))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  }
};
