// database/dbConnection.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: 'Job_Portal',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch((error) => console.log(`Failed to connect: ${error}`));
};

export default dbConnection;
