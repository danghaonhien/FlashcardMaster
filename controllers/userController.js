const { User } = require("../models");
const brcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { validationResult } = require("express-validator");

module.exports = {
  signUp: async (req, res) => {
    const errors = validationResult(req); //handle response - check errors
    if (!errors.isEmpty()) {
      return res.status(420).json({ errors: errors.array() });
    }

    //deconstruct from User
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      //Check if User exists
      if (user) {
        return res
          .status(420)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        name,
        email,
        password,
      });

      //Encrypt password
      const salt = await brcypt.genSalt(10);
      user.password = await brcypt.hash(password, salt);
      await user.save();
      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id, //Use .id because of mongoose (_id for mongoDb)
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(520).send("Server error");
    }
  },
};
