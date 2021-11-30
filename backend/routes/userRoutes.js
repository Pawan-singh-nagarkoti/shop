import express from 'express';
const router = express.Router();
import User from '../model/userModel.js';

// user signup details
router.post('/register', async (req, res) => {
  const { username, email, password, mobile } = req.body;
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: 'Email already exist' });
    } else {
      const user = new User({ username, email, password, mobile });
      await user.save();
      res.status(201).json({ message: 'user registerd successfully' });
    }
  } catch (error) {
    console.log(error.message);
  }
});

// user login details

router.post('/login', async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    const userLogin = await User.findOne({ email: email });
    const passwords = await User.findOne({ password: password });

    if (userLogin) {
      const isMatch = (password, passwords);

      // generate token
      token = await userLogin.generateAuthToken();

      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ message: 'Invalid Credientials' });
      } else {
        res.status(200).json({ message: 'user signin successfully' });
      }
    } else {
      res.status(400).json({ error: 'invalid credientials' });
    }
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
