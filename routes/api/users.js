const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../../models/User');

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email must be valid format').isEmail(),
    check('password', 'Passmord must have 3 or more characters').isLength({
      min: 3,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        //User already exists
        return res
          .status(400)
          .json({ errors: [{ msg: 'User with that email already exists!' }] });
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      const salt = await bcrypt.genSalt(10);
      const encPassword = await bcrypt.hash(password, salt);

      user = new User({
        name,
        email,
        password: encPassword,
        avatar,
      });

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      //Change expire when deploying
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error);
      res.status(500).send('SERVER ERROR');
    }
  }
);

module.exports = router;
