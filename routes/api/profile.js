const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current user profile based on token in request
// @access  Private

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name, avatar']);

    if (!profile) {
      return res.status(404).json({ msg: 'No profile exists for this user! ' });
    }

    res.json(profile);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// @route   POST api/profile/
// @desc    Create new profile
// @access  Private

router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required').not().isEmpty(),
      check('skills', 'Skills is a required field').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        company,
        bio,
        gitUsername,
        website,
        location,
        status,
        skills,
        createdDate,
        social,
      } = req.body;

      const profileFields = {};

      profileFields.user = req.user.id;
      if (company) profileFields.company = company;
      if (bio) profileFields.bio = bio;
      if (gitUsername) profileFields.gitUsername = gitUsername;
      if (website) profileFields.website = website;
      if (location) profileFields.location = location;
      if (status) profileFields.status = status;
      if (skills) {
        profileFields.skills = skills.split(',').map((skill) => skill.trim());
      }
      if (createdDate) profileFields.createdDate = createdDate;
      if (social) {
        profileFields.social = {};
        if (social.youtube) profileFields.social.youtube = social.youtube;
        if (social.instagram) profileFields.social.instagram = social.instagram;
        if (social.facebook) profileFields.social.facebook = social.facebook;
        if (social.twitter) profileFields.social.twitter = social.twitter;
        if (social.linkedin) profileFields.social.linkedin = social.linkedin;
      }

      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //Update existing profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      profile = new Profile(profileFields);

      await profile.save();
      return res.json(profile);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/profile/
// @desc    Get all profiles
// @access  Private

router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    return res.json(profiles);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user id
// @access  Private

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: "This user doesn't have a profile!" });
    }

    res.json(profile);
  } catch (error) {
    if (error.kind == 'ObjectId')
      return res.status(400).json({ msg: "This user doesn't have a profile!" });

    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/profile/
// @desc    Delete current logged in profile, user, & posts
// @access  Private

router.delete('/', auth, async (req, res) => {
  try {
    //@todo - Also remove posts

    //Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User, Profile and or Posts deleted!' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
