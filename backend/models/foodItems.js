import mongoose from "mongoose";

const foodItemSchema = mongoose.Schema({
    resturantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    },
    isVeg:Boolean,
    isAvailable:String,
    price:Number,
    description:String,
    photos:[{
        type:String
    }]
})

const FoodItem = mongoose.model("FoodItem",foodItemSchema)

export default FoodItem