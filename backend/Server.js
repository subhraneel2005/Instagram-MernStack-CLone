const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./Users");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const postModel = require("./Posts");

const PORT = 3000 || process.env.PORT
mongoose.connect("mongodb://127.0.0.1:27017/instagramUsersDB");

app.use(bodyParser.json());

app.use(cors());

app.use(session({
    secret: "hahahahaha",
    resave: false,
    saveUninitialized: false,
}));

const login = async(req,res) => {

    const {username, password} = req.body;

    try {
        const user = await userModel.findOne({username, password});
        
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
            req.session.user = {username: user.username, password: user.password};

            res.json({message:"Login successfull"});
        
    } catch (error) {
        res.status(404).json({error: "Internal server error"});
    }
}

const register = async(req,res) => {
    const {fullName, username, email, password} = req.body;
    try {
        const existingUser = await userModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        const user = new userModel({fullName, username, password, email});
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(404).json({message:"Internal Server Error"});
    }
}

const logout = (req,res) => {
   req.session.destroy();
   res.json({message: "Logged out successfully"});
}

const isAuthenticated = async (req, res, next) => {
    // Extract username and password from request body
    const { username, password } = req.body;
  
    try {
      // Find the user by username
      const user = await userModel.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Compare the provided password with the stored password
      if (password !== user.password) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Authentication successful, attach user object to the request
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

const createPosts = async(res,req) => {
  
}

app.post("/register", register);
app.post("/login", login);
app.post("/logout", logout);
app.get('/profile', isAuthenticated, (req, res) => {
    
    res.json({ message: 'Welcome to your profile' });
  });

app.listen(PORT,() => {
    console.log(`Server is running on port : ${PORT}`);
})