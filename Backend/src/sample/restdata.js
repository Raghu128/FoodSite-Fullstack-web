import mongoose from "mongoose";
const restdata = new mongoose.Schema({
    rname: {
        type: String,
        required: true,
    },
    imgdata: {
        type: String,
        required: true,
    },
    // address: {
    //     type: String,
    //     required: true,
    // },
    // delimg: {
    //     type: String,
    //     required: true,
    // },
    // somedata: {
    //     type: String,
    //     required: true,
    // },
    price: {
        type: Number,
        required: true,
    },
    // rating: {
    //     type: String,
    //     required: true,
    // },
    // arrimg: {
    //     type: String,
    //     required: true,
    // }
});


const RESTDATA = mongoose.model("restdata", restdata);

export default RESTDATA;
