const { verifyToken } = require("../utils/handleJwt");

const checkAuth = async (req, res, next) => {
  try {
    const cookieHeader = req.headers.cookie;
    const token = JSON.parse(
      decodeURIComponent(cookieHeader.split("userData=")[1])
    );
    const tokenData = verifyToken(token.tokenSession);
    console.log(tokenData);
    if (tokenData) next();
  } catch (error) {
    res.status(405);
    res.send({ error: "FALTA EL TOKEN" });
  }
};

module.exports = checkAuth;
