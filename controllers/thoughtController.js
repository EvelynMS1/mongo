const { Thoughts, User, Reaction } = require("../models");

//getAllThoughts
module.exports = {
  async getAllThoughts(req, res) {
    try {
      const allThoughts = await Thoughts.find();
      res.json(allThoughts);
    } catch (err) {
      resizeBy.status(500).json(err);
    }
  },
  // get thought by id
  async getSingleThought(req, res) {
    try {
      const thought = await Thoughgts.findOne({ id: req.params.userId });
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
      const thought = await Thoughts.create(req.body);
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //updateThought
  async updateThought(req, res) {
    try {
      const thought = await Thoughts.findOneAndUpdate({
        _id: req.params.videoId,
      });
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
      const deleteThought = await Thoughts.findOneAndRemove({
        _id: req.params.thoughtsId,
      });
      if (!deleteThought) {
        return res.status(404).json({ message: "no thought with this id" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //createReaction
  // async createReaction(req,res){
  //     try{

  //     }this.catch(){

  //     }
  // },

  //deleteReaction
  // async deleteReaction(req,res){
  // try{

  // }catch(err){

  // }
  // }
};
