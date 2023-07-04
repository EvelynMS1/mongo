const { Thought, User} = require("../models");

//getAllThoughts
module.exports = {
  async getAllThoughts(req, res) {
    try {
      const allThoughts = await Thought.find().populate('reactions');
      res.json(allThoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // get thought by id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ id: req.params.thoughtId });
      if (!thought) {
        return res.status(404).json({ message: "No thought with that ID" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //createThought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { username: thought.username },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      if (!user) {
        console.log("User not found!");
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //updateThought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        req.body,
        { new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: "no video with this id" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //deleteThought
  async deleteThought(req, res) {
    try {
      const deleteThought = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });
      if (!deleteThought) {
        return res.status(404).json({ message: "no thought with this id" });
      }
      res.json(deleteThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //   createReaction
  async createReaction(req, res) {
    console.log(req.body);
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  //deleteReaction
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
