const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.secretToken);
    // verify transforme en donnée js basique
    const userId = decodedToken.userId;
    console.log("auth" + userId);
    console.log("auth" + req.body.userid)
    // userId raccourci JS de userId: userId
    req.auth = {userId};
    
    console.log(req.body.title + req.body.content + req.body.userid)
    // VERIFICATION USER ID BODY correspond à user id
    if (req.body.userid && req.body.userid !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(403).json({
      error: new Error('Invalid request!')
    });
  }
};