import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionDB = await mongoose.connect(`${process.env.MONGODB_URI}/food-website`);
        console.log(`\n MongoDb connect !! HOST : ${connectionDB.connection.host}`);
    } catch (error) {
        console.error("\n\ndb error: ", error);
        process.exit(1);
    }
}


export default connectDB;