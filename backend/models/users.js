import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    }, 
    userEmail: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          },
          message: 'Invalid email address format',
        },
      },
    address : [{
        doorno:{
            type: String,
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
        pincode:{
            type: String,
        },
}]
})

const User = mongoose.model("User",userSchema)

export default User;