import mongoose from 'mongoose';
import dotenv from 'dotenv';
const Connection = async (username, password) => {
    const URL = process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.jsc6usr.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;