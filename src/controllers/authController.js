import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { validateInput } from '../utils/helpers.js';

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const validationError = validateInput(username, password);
        if (validationError) {
            return res.status(400).json({ 
                success: false,
                message: validationError 
            });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ 
                success: false,
                message: 'Username already exists' 
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({ 
            success: true,
            message: 'User registered successfully' 
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            success: false,
            message: 'Server error' 
        });
    }
};
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const validationError = validateInput(username, password);
        if (validationError) {
            return res.status(400).json({ 
                success: false,
                message: validationError 
            });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ 
                success: false,
                message: 'Invalid credentials' 
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ 
                success: false,
                message: 'Invalid credentials' 
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ 
            success: true,
            token,
            username: user.username,
            message: 'Login successful'
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            success: false,
            message: 'Server error' 
        });
    }
};

export const protectedRoute = (req, res) => {
    res.json({ 
        success: true,
        message: 'This is a protected route',
        userId: req.user.id 
    });
};