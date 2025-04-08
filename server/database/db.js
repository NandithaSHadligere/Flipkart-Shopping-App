import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const Connection = async () => {
    const USERNAME = process.env.MONGO_USERNAME;
    const PASSWORD = process.env.MONGO_PASSWORD;
    
    const URL = 'mongodb+srv://nanditha032002:Nandu987@flipkart-database.pofu3.mongodb.net/Flipkart-database?retryWrites=true&w=majority';

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('✅ Database Connected Successfully');
    } catch (error) {
        console.log('❌ Error connecting to Database:', error.message);
    }
};

export default Connection;
