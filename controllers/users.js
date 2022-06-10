const User = require('../models/user');

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(next);
};

const getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        return next(new Error('Пользователь не найден'));
      }
      return res.status(200).send(user);
    })
    .catch(next);
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({
      name: user.name,
      about: user.about,
      avatar: user.avatar,
      // _id: user._id,
    }))
    .catch((err) => res.status(400).send(err));
};

module.exports = { getUsers, getUserById, createUser };
