const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const ProductModel = mongoose.model("Product");

// function for getting a product by id
router.get('/',(req, res)=> {
    ProductModel.find((err, data) => {
        if (!err) {
        res.status(200).send(data);
        }
        else{
          res.status(404).send({ message: "No Data found" });
        }
         })
})

//function for adding a new product to the table
router.post('/', (req, res)=> {

  var product= new ProductModel();

  product.strImage= req.body.strImage;
  product.strName= req.body.strName;
  product.strdescription=req.body.strdescription;
  product.intPrice=req.body.intPrice;
  product.save((err,doc)=>{
      if(!err)
          res.status(200).send(doc);
      else
      console.log(err)

  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  ProductModel.findById(id,(err,doc)=>{
      if(!err){
          if(doc)
              res.status(200).send(doc);
          else
              res.status(404).send({ message: "Not found Product with id " + id });
      }
      else{
          res.status(500).send({ message: "Error retrieving User with id=" + id });
      }
  })
});

router.put('/:id', (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  ProductModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found!`
        });
      } else res.send({ message: "Product details  updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
});


   
//function for deleting a product from table
router.delete('/:id', (req, res) =>{
  const id = req.params.id;
  ProductModel.findByIdAndRemove(id,(err,doc)=>{

    if(!err)
    {
        if (!doc)
            res.status(404).send({message: `Cannot delete Product with id=${id}. Maybe Product was not found!`})
        else
            res.send({ message: "Product was deleted successfully!"});
    }
   else
    res.status(500).send({message: "Could not delete Product with id=" + id});
});

});

module.exports = router;
