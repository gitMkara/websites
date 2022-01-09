const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const post = await newPost.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("Did not create a post");
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json("Did not update a post");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post's been deleted.");
  } catch (error) {
    res.status(500).json("Did not delete a post");
  }
});

//GET
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("Did not get a post");
  }
});

//GET ALL
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;

    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
      console.log(posts);
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json("Did not get a post2");
  }
});

module.exports = router;
