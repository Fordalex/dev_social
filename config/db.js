const mongoose = require('mongoose');
const {REACT_APP_MONGO_URI} = process.env;
const db = REACT_APP_MONGO_URI

const connectDB = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;