const USER = require('../model/userModel')

async function signupHandler (req, res) {
    try {
      const { username, password, role } = req.body;
      console.log(username)
      // Check if username already exists
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists.' });
      }
  
      // Hash the password
      const hashedPassword = password;
  
      // Create a new user
      const newUser = new User({ username, password: hashedPassword, role });
      await newUser.save();
  
      res.status(201).json({ success: true, message: 'User created successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }



  async function loginHandler (req, res){
    try {
      const { username, password } = req.body;
      console.log(username)
      // Find the user in the database
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
  
      // Check the password
  
      if (password != user.password) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
  
      // Create a JWT token
      const token = jwt.sign({ userId: user._id, role: user.role }, 'secret_key', { expiresIn: '1h' });
  
      return res.render('admin');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }



  module.exports = {signupHandler , loginHandler};