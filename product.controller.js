var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");

// mongoose.connect("mongodb://mongo:27017/products"); // use this while Execeuting Docker

mongoose.connect("mongodb://localhost/products"); // use this while Execeuting Docker

var productSchema = new mongoose.Schema({ name: String, price: Number });

var Product = mongoose.model("product", productSchema);

router.get("/", (req, res) => {
  console.log("Testing.........");
  res.send("Product API");
});

router.get("/products", (req, res) => {
  Product.find((err, products) => {
    if (err) {
      console.log(err);
    }
    console.log(products, "<---- Products");
    res.send(products);
  });
});

router.get("/products/:id", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      console.log(err);
    }
    res.send(product);
  });
});

router.post("/products", (req, res) => {
  var product = new Product(req.body);
  product
    .save()
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/products/:id", (req, res) => {
  var product = {
    name: req.body.name,
    price: req.body.price,
  };
  Product.findOneAndUpdate(
    { _id: req.params.id },
    { $set: product },
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

router.delete("/product/:id", (req, res) => {
  Product.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = router;
