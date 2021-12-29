require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const userController = require('./controller/user_controller');
const server = express();

server.listen(process.env.SERVER_PORT, function () {
  console.log("server has started to run..");
  mongoose
    .connect(process.env.ATLAS_DB)
    .then(function () {
      console.log("ATLAS_DB HAS CONNECTED");
      server.use(express.json());
      server.post('/adduser',userController.addNewUser);
      server.get('/users',userController.getUser)
    })

   

    .catch(function (error) {
      console.log(error.message);
    });
});
