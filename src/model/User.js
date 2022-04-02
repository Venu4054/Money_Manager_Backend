const mongoose=require("mongoose");
const bcrypt = require('bcryptjs');

//schema

const userSchema= mongoose.Schema({
    firstName:{
        required: [true, "First Name is Required"],
        type: String,
    },
    lastName:{
        required: [true, "Last Name is Required"],
        type: String,
    },
    email:{
        required: [true, "Email is Required"],
        type: String,
    },
    password:{
        required: [true, "Password is Required"],
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default:false,
    }
},{
    timestamp:true,
});




userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
    next();
})
//compile schema to model
const User= mongoose.model("User",userSchema);
module.exports=User;