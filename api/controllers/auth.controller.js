import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
    const { username, email, password, mobile, adress } = req.body;
  
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^(071|076|077|075|078|070|074|072)\d{7}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{5,}$/;
  
    if (!username || !email || !password || !mobile || !adress ||
        username === "" || email === "" || password === "" || mobile === "" || adress === "") {
        return next(errorHandler(400, 'All fields are required'));
    } else if (!emailRegex.test(email)) {
        return next(errorHandler(400, 'Invalid email format'));
    } else if (!mobileRegex.test(mobile)) {
        return next(errorHandler(400, 'Invalid mobile number format'));
    } else if (!passwordRegex.test(password)) {
        return next(errorHandler(400, 'Password should be at least 5 characters long and contain at least one uppercase letter, one digit, and one symbol (!@#$%^&*()_+).'));
    }else if (username.length < 7 || req.body.username.length > 20) {
      return next(errorHandler(400, 'Username must be between 7 and 20 characters'));
  }
  
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, adress, mobile });
  
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        next(err);
    }
  };
  