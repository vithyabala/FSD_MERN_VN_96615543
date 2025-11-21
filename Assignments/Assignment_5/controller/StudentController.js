const Users = require("../model/StudentModel")

const insertuser=async(req,res)=>{
    const user=await Users.create(req.body)
    res.send({user})
}
const getUsers=async(req,res)=>{
    const user=await Users.find()
    res.send({user})
}
const updateuser=async(req,res)=>{
    const name =req.params.name;
    let user =await Users.findOneAndUpdate({name:name},req.body,{new:true})
    res.send({user})
}
const deleteUser=async (req,res)=>{
    const name=req.params.name;
    let user=await Users.findOneAndDelete({name:name})
    res.send({user})
}


module.exports = {getUsers,insertuser,updateuser,deleteUser};