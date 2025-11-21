const express = require('express');
const app =express();
const mongoose=require('mongoose')

const userRouter=require('./router/StudentRoter');
const port =8000;
mongoose
.connect("mongodb://localhost:27017/")
.then(()=>{
    console.log("connected to DB 🍃");
})
.catch((err)=>{
    console.log(err);
});
app.use(express.json());

app.use(userRouter);
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);

});