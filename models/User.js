const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  scores: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Score",
    },
  ],
  flashcards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flashcard",
    },
  ],
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});
// UserSchema.methods.toJSON = function () {
//   var obj = this.toObject();
//   delete obj.password;
//   return obj;
// };
// UserSchema.methods.comparePassword = async function (candidatePassword) {
//   const user = this;
//   try {
//     const isMatch = await bcrypt.compare(candidatePassword, user.password);
//     return Promise.resolve(isMatch);
//   } catch (e) {
//     return Promise.reject(e);
//   }
// };
// UserSchema.pre("save", async function (next) {
//   // gets access to the user model that is currently being saved
//   const user = this;
//   if (user.isModified("password")) {
//     try {
//       const salt = await bcrypt.genSalt();
//       const hash = await bcrypt.hash(user.password, salt);
//       // overwrite the plain text password with our hash
//       user.password = hash;
//       // Finally call save
//       next();
//     } catch (e) {
//       // Call save with an error
//       next(e);
//     }
//   }
//   next();
// });

module.exports = mongoose.model("user", UserSchema);
// module.exports = model("User", UserSchema);
