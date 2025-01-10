import mongoose,{Schema} from "mongoose";
const userSchema =new Schema({
    username:{
        type:string,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,

    },
})

export const User = mongoose.model("user",userSchema)