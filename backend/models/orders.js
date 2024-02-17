import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    resturantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    },
    purchaseAmt:String,
    orderDate:Date
})

const Order = mongoose.model("Order",orderSchema)

export default Order