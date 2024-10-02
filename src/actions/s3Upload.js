"use server"
import { S3Client,PutObjectCommand,GetObjectCommand } from "@aws-sdk/client-s3";
import prisma from "../../db";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
const s3Client = new S3Client({
    forcePathStyle: false, // Configures to use subdomain/virtual calling format.
    endpoint: process.env.DO_SPACE_ENDPOINT,
    region: process.env.DO_REGION,
    credentials: {
      accessKeyId: process.env.DO_ACCESS_KEY,
      secretAccessKey: process.env.DO_ACCESS_SECRET
    }
});


// upload to digitalocean spaces
let globalFile=null
async function uploadFileToS3(file, fileName,session){
    const timestamp = Date.now();
     globalFile= `User-${session?.user?.name}-${session.user.id}/${fileName}${timestamp}`;
      const key = `User-${session?.user?.name}-${session.user.id}/${fileName}${timestamp}`;
    const params = {
        Bucket: process.env.DO_BUCKET_NAME,
        Key: key,
        Body: file,
        //ACL: 'public-read',
        ContentType: 'image/jpg',
    };
    
    const command= new PutObjectCommand(params)
    try {
        const data = await s3Client.send(command);
         // Construct the file URL manually
   const fileUrl = `https://tasvirai-storages.blr1.digitaloceanspaces.com/${key}`;
       // console.log("Success", fileUrl);
        return fileUrl
    } catch (err) {
        console.log("Error", err);
        return err
    } 

}

export const uploadImages = async (formdata,session) => {
   
    try {

        const file = formdata.get('file')
  //  console.log("file",file.name)
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileUrl = await uploadFileToS3(buffer, file.name,session);

  

  if(fileUrl){
  //  console.log("File URL saved to database",fileUrl)

   

  }
        
    } catch (error) {
        console.log(error)
        
    }
    
   

}

export const getImages = async () => {
  //  console.log("globalFile",globalFile)

    const getObjectParams={
        Bucket: process.env.DO_BUCKET_NAME,
        Key: globalFile
    }

    const command = new GetObjectCommand(getObjectParams);

    const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });
    console.log("url",url)

}


