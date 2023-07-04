//username
//string Unique Required Trimmed
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },

    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],

    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    //returns json object as options for schema
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);
//create Virtual property
userSchema.virtual("friendCount").get(function () {
  //get the length of the friends array
  return this.friends.length;
});

//Initializing User model
const User = model("User", userSchema);

module.exports = User;
