const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @GET USER BY TOKEN
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server ERROR');
  }
});

// @LOGIN
router.post(
  '/',
  [check('email', 'Email must be valid format').isEmail(), check('password', 'Passmord is required').exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        //User doesn't exists
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const isMatched = await bcrypt.compare(password, user.password);

      if (!isMatched) {
        //Wrong password
        return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      //Change expire when deploying
      jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      console.log(error);
      res.status(500).send('SERVER ERROR');
    }
  }
);

module.exports = router;
