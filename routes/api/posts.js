const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');
const auth = require('../../middleware/auth');
const request = require('request');

const Post = require('../../models/Post');
const Profile = require('../../models/Post');
const User = require('../../models/User');

// @route   POST api/posts/
// @desc    Create new post
// @access  Private

router.post(
  '/',
  [
    auth,
    [
      check('title', 'Post title is required').not().isEmpty(),
      check('body', 'Post body is a required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { title, body } = req.body;

      const user = await User.findById(req.user.id).select('-password');

      const newPostObj = new Post({
        title: title,
        body: body,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      post = await newPostObj.save();

      return res.json(post);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/posts/
// @desc    Get all posts
// @access  Public

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts/:post_id
// @desc    Get post by post id
// @access  Public

router.get('/:post_id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    if (error.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/posts/user/:user_id
// @desc    Get all posts for a given user by user_id
// @access  Public

router.get('/user/:user_id', async (req, res) => {
  try {
    const posts = await Post.find({ user: req.params.user_id });
    if (!posts) {
      return res.status(404).json({ msg: 'Posts not found' });
    }
    res.json(posts);
  } catch (error) {
    if (error.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Posts not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/posts/:post_id
// @desc    Delete post by post id
// @access  Private

router.delete('/:post_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    if (post.user.toString() != req.user.id) {
      return res
        .status(401)
        .json({ msg: 'User is not authorized to delete this post!' });
    }

    await Post.remove();
    res.json({ msg: 'Post Deleted!' });
  } catch (error) {
    if (error.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    console.log(error);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/posts/like/:post_id
// @desc    Add like to a post
// @access  Private

router.put('/like/:post_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: 'You have already liked this post' });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();
    res.json(post.likes);
  } catch (error) {
    if (error.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    console.log(error);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/posts/unlike/:post_id
// @desc    Unlike like to a post
// @access  Private

router.put('/unlike/:post_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.post_id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res
        .status(400)
        .json({ msg: "You cannot unlike a post you don't like like ;)" });
    }

    const rmvIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(rmvIndex, 1);

    await post.save();
    res.json(post.likes);
  } catch (error) {
    if (error.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    console.log(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
