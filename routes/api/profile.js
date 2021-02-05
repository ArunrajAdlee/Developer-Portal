const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config');
const auth = require('../../middleware/auth');
const request = require('request');

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

      const { company, bio, gitUsername, website, location, status, skills, createdDate, social } = req.body;

      const profileFields = {};
      profileFields.social = {};
      profileFields.experience = [];
      profileFields.education = [];

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
        if (social.youtube) profileFields.social.youtube = social.youtube;
        if (social.instagram) profileFields.social.instagram = social.instagram;
        if (social.facebook) profileFields.social.facebook = social.facebook;
        if (social.twitter) profileFields.social.twitter = social.twitter;
        if (social.linkedin) profileFields.social.linkedin = social.linkedin;
      }

      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //Update existing profile
        profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });
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
// @access  Public

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
// @access  Public

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
    if (error.kind == 'ObjectId') return res.status(400).json({ msg: "This user doesn't have a profile!" });

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

// @route   PUT api/profile/experiences
// @desc    Add experience to profile
// @access  Private

router.put(
  '/experience',
  [
    auth,
    [
      check('position', 'Position is required').not().isEmpty(),
      check('company', 'Company is a required field').not().isEmpty(),
      check('startDate', 'startDate is a required field').not().isEmpty(),
      check('location', 'location is a required field').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { position, company, location, startDate, endDate, isCurrent, description } = req.body;

      const expObj = {
        position,
        company,
        location,
        startDate,
        endDate,
        isCurrent,
        description,
      };
      const profile = await Profile.findOne({ user: req.user.id });
      profile.experience.unshift(expObj);

      await profile.save();

      res.json(profile);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/profile/experience/:experience_id
// @desc    Delete experience by given exp obj id
// @access  Private

router.delete('/experience/:experience_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    const rmvIndex = profile.experience.map((item) => item.id).indexOf(req.params.experience_id);

    profile.experience.splice(rmvIndex, 1);

    await profile.save();
    res.json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/profile/education
// @desc    Add education to profile
// @access  Private

router.put(
  '/education',
  [
    auth,
    [
      check('school', 'School is required').not().isEmpty(),
      check('degree', 'Degree is a required field').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { school, degree, description } = req.body;

      const eduObj = {
        school,
        degree,
        description,
      };

      const profile = await Profile.findOne({ user: req.user.id });
      profile.education.unshift(eduObj);

      await profile.save();

      res.json(profile);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/profile/education/:education_id
// @desc    Delete education by given education obj id
// @access  Private

router.delete('/education/:education_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    const rmvIndex = profile.education.map((item) => item.id).indexOf(req.params.education_id);

    profile.education.splice(rmvIndex, 1);

    await profile.save();
    res.json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/profile/github/:username
// @desc    Get user repos from Github
// @access  Public

router.get('/github/:username', async (req, res) => {
  try {
    const options = {
      uri: `https://api.github.com/users/${
        req.params.username
      }/repos?per_page=5&sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get(
        'githubSecret'
      )}`,
      method: 'GET',
      headers: { 'user-agent': 'node-js' },
    };
    request(options, (error, response, body) => {
      if (error) console.log(error);

      if (response.statusCode !== 200) {
        return res.status(404).json({ msg: 'No GitHub profile found' });
      }
      res.json(JSON.parse(body));
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
