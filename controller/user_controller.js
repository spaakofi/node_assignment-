const usermodel = require("../models/user_models");

async function addNewUser(req, res) {
  try {
      await usermodel.create(req.body);
      res.status(200).json({success:true, message:'User has been created'});
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
};

async function getUser(req, res) {
    try {
        const result = await usermodel.find({})
        res.status(200).json({success:true, data:result
                
        })
    } catch (error) {
        res.status(404).json({ message: error.message, success: false });
        
    }
    
};

module.exports = {addNewUser, getUser}
