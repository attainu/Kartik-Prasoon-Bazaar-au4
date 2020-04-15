const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const passport = require("passport");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

// Load Product Model
const Product = require("../../models/Product");

// Load Input Validation
const validateProductInput = require("../../validation/add-product");

// Multer config
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

// Cloudinary config
cloudinary.config({
  cloud_name: keys.cloudinaryKey.cloud_name,
  api_key: keys.cloudinaryKey.api_key,
  api_secret: keys.cloudinaryKey.api_secret,
});

// @route     GET api/products/test
// @desc      Test user route
// @access    Public
router.get("/test", (req, res) => res.json({ msg: "Product Route Works" }));

// @route     POST api/products/addproduct
// @desc      Add new product
// @access    Private
router.post(
  "/addproduct",
  passport.authenticate("jwt", { session: false }),
  upload.array("image"),
  async (req, res) => {
    const { errors, isValid } = validateProductInput(req);

    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // Get Fields
    const newProduct = {
      user: req.body.id,
      title: req.body.title,
      category: req.body.category,
      city: req.body.city,
      price: req.body.price,
      description: req.body.description,
    };
    // Save Product
    const saveProduct = (product) => {
      let newPro = new Product(product);
      newPro
        .save()
        .then((savedProduct) => res.json(savedProduct))
        .catch((error) => console.log(err));
    };

    if (req.files.length > 0) {
      let images = [];
      req.files.map(async (val, ind) => {
        let wait = await cloudinary.uploader.upload(val.path, function (
          error,
          response
        ) {
          if (error) {
            console.log("err", error);
          }
        });
        images.push(wait.url);
        if (images.length === req.files.length) {
          newProduct.photos = images;
          saveProduct(newProduct);
        }
      });
    } else {
      saveProduct(newProduct);
    }
  }
);

module.exports = router;
