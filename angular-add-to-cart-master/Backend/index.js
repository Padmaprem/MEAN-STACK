const express= require('express');
const UserController = require('./controllers/user');
const ProductController=require('./controllers/product');
const collection=require('./models/index');
const app= express();
const cors= require('cors');



app.use(express.json());
app.use(cors());
app.use("/user/api",UserController);
app.use("/product/api", ProductController);



app.listen(8080,()=>{
    console.log("Application started in port 8080")
})

module.exports=app;