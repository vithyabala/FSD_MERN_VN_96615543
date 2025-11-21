const express=require("express");
const userRouter=express.Router();
const { insertuser,getUsers, updateuser, deleteUser,} = require('../controller/StudentController');


userRouter.post("/insert-user",insertuser)
userRouter.get("/get-users",getUsers)
userRouter.put("/update-user/:name",updateuser)
userRouter.delete("/delete-user/:name",deleteUser)



module.exports=userRouter;