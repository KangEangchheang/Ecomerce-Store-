// controller/usersController.js

function getUserProfile(req, res) {
    // Access user information from the decoded token
    const userProfile = {
      id: req.decoded.id,
      username: req.decoded.username,
    };
  
    res.json({ success: true, userProfile });
  }
  
  module.exports = {
    getUserProfile,
  };
  