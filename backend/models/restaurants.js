import mongoose from "mongoose"

const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    address:[{
        branchName:{
            type: String,
            required: true
        },
        street:{
            type: String,
        },
        city:{
            type: String,
        },
        state:{
            type: String,
        },
    }],
    photos:[{
        type:String
    }]
})

const Restaurant = mongoose.model("Restaurant",restaurantSchema)

export default Resturant