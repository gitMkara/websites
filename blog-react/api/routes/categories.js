const router = require("express").Router();
const Category = require("../models/Category");

//CREATE
router.post("/", async (req, res) => {
    try {
      const newCategory = new Category(req.body);
      const categories = await newCategory.save();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json("Did not create a category");
    }
  });

//DELETE
  router.delete("/:id", async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.status(200).json("Category's been deleted.");
    } catch (error) {
      res.status(500).json("Did not delete a Category");
    }
  });

  //GET
  router.get("/", async(req,res) => {
      try {
          let categories = await Category.find();
          res.status(200).json(categories); 
      } catch (error) {
        res.status(500).json("Did not get a Category");
      }
  })

  module.exports = router;