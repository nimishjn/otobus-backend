const jwt = require("jsonwebtoken");

const decodeJWT = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.headers.authorization;

  if (!token) {
    res.status(401).json({
      code:"E2",
      message: "Need JWT",
    });
    
    return;
  }

  try {
    req.emailFromToken = jwt.verify(token, process.env.TOKEN_SECRET).username;
    console.log("From token: ", req.emailFromToken);
    next();
  } catch (err) {
    res.status(400).json({
      code:"E2",
      message: "Invalid JWT",
    });
  }
};

module.exports = decodeJWT;