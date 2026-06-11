const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

    if (!mongoUri) {
        console.warn('MongoDB URI not found. Skipping database connection.');
        return false;
    }

    mongoose.set('bufferCommands', false);

    try {
        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000
        });
        console.log('MongoDB connected');
        return true;
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        return false;
    }
};

module.exports = connectDB;