const mongoose = require('mongoose');
const User = require('../model/user');

const isDbReady = () => mongoose.connection.readyState === 1;

const getAllUsers = async (req, res) => {
    if (!isDbReady()) {
        return res.status(503).json({ message: 'Database is unavailable. Please check your MongoDB connection.' });
    }

    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const createUser = async (req, res) => {
    if (!isDbReady()) {
        return res.status(503).json({ message: 'Database is unavailable. Please check your MongoDB connection.' });
    }

    const { name, email } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists with this email.' });
        }

        const user = new User({ name, email });
        await user.save();

        return res.status(201).json({
            message: `User created successfully with name: ${user.name} and email: ${user.email}`,
            user
        });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllUsers,
    createUser
};