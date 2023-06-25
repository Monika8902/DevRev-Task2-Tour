import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { username, email, password, photo } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with the provided email",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      photo,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to register. Please try again.",
    });
  }
};

export const login = async (req, res) => {
    const email = req.body.email
  try {
    const user = await User.findOne({email})

    if(!user)
    {
        return res.status(404).jso({
            success:false,
            message:'User not found'
        })
    }

    const checkCorrectPassword = await bcrypt.compare(req.body.password,user.password)

    if(!checkCorrectPassword){
        return res
        .status(401)
        .json({success:false,message:"Incorrect email or password"});
    }
    
    const {password,role,...rest} = user._doc;

    const token = jwt.sign(
        {id:user._id,role:user.role},
        process.env.JWT_SECRET_KEY,
        { expiresIn:"30d"}       
    );
    res.cookie('accessToken',token,{
        httpOnly:true,
        expires:token.expiresIn
    }).status(200).json({token,data:{...rest},role,})

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Incorrect emil or password",
    });
  }
};
