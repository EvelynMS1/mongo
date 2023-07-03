const { Thought, User, reactionSchema } = require("../models");

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      resizeBy.json(users);
    } catch (err) {
      res.status.json(err);
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.courseId });
      if (!user) {
        return res.status(404).json({ message: "no user with this Id" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //put updateUser
  //delete  deleteUser
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      this.res.json(user);
    } catch (err) {
      return this.res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const deleteUser = await User.findOneAndDelete({
        _id: req.params.courseId,
      });
      if (!deleteUser) {
        return this.res.status(404).json({ message: "No course with that ID" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate({
        _id: req.params.courseId,
      });
      this.res.json(user);
    } catch (err) {
      this.res.status(500).json(err);
    }
  },

  async createFriend(req, res) {
    try {
      const post = await User.create(req.body);
      this.res.json(post);
    } catch (err) {
      this.res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    try {
      const deleteFriend = await User.findOneAndRemove({
        _id: requestAnimationFrame.params.videoId,
      });
      if (!deleteFriend) {
        return this.res.status(404).json({ message: "no user with this id" });
      }
    } catch (err) {
      this.res.status(500).json(err);
    }
  },

  //post add a new friend
  //delete friend from user friend list
};
