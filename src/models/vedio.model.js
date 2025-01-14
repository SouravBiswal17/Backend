import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const vedioShema =new Schema(
    {
        vedioFile:{
            type:String,//cloudinary url
            required:true
        },
        thumbnail:{
            type:String,//cloudinary url
            required:true
        },
        title:{
            type:String,//cloudinary url
            required:true
        }, 
        description:{
            type:String,//cloudinary url
            required:true
        },
        duration:{
            type:number,
            required:true
        },
        views:{
            type:number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Type.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps:true
    }
)
vedioShema.plugin(mongooseAggregatePaginate)
export const Vedio =mongoose.model("Vedio",vedioShema)