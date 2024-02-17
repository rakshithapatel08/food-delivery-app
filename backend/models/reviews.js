import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    resturantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    },
    reviewDesc:String,
    ratings:Number
})

const Review = mongoose.model("Review",reviewSchema)

export default Review