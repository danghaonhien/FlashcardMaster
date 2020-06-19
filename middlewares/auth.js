// const passport = require("passport");

// // Tells passport to look for a 'jwt' strategy we defined
// const requireAuth = passport.authenticate("jwt", { session: false });
// // Tells passport to look for a 'local' strategy we defined
// const requireSignIn = passport.authenticate("local", { session: false });

// module.exports = {
//   requireAuth,
//   requireSignIn,
// };

const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //Get Token from header Database
  const token = req.header("authorization");

  //Check if not token
  if (!token) {
    return res.status(420).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    jwt.verify(token, config.get("jwtSecret"), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: "Token is not valid" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    res.status(420).json({ msg: "Token is not valid" });
  }
};
