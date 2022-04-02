const mongoose = require("mongoose");

//mXM3QwTeSag6ZLF

//mongodb+srv://VenuPelluru:<password>@money-manager.06ngm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const dbConnect = async() =>{
    try{
     await mongoose.connect(process.env.MONGO_URI,{
         useUnifiedTopology:true,
         useNewUrlParser:true,
     });
     console.log("DB Connected successfully");
    }catch(error){
        console.log(`Error ${error.message}`);
    }
};


module.exports= dbConnect;