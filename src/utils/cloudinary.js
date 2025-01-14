import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


import { v2 as cloudinary } from 'cloudinary';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dvdvgezhf', 
        api_key: '474675531413736', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });
    
     
})();
const uploadOnCloudinary = async (localFilePath)=>{
try{
    if(!localFilePath)return null
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
   console.log("file is uploaded on cloudinary",response.url);
   return response;
    } catch(error){
        fs.unlinkSync(localFilePath)
        return null;
    }
}
export {uploadOnCloudinary}