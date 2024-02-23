import express from "express";
import { S3 } from "aws-sdk";

const app = express();

const s3 = new S3({
    apiVersion: '2012-11-05',
    accessKeyId: 'AKIASRLANABZOYYOEBBS',
    secretAccessKey: '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',
    region: 'ap-south-1'
})

app.get('/*', async (req, res) => {
    const host = req.hostname;
    console.log(host);  //id.muiltiply.com
    const id = host.split(".")[0];  // [id,multiply,com]  // id refers to the project id
    console.log(id);
    const filePath = req.path;  //we take this file's path and id then we extract from s3 and  forward the files
    const contents = await s3.getObject({
        Bucket: "multiplyvercel",
        Key: `dist/${id}${filePath}`
    }).promise();
    
    const type = filePath.endsWith("html") ? "text/html" : filePath.endsWith("css") ? "text/css" : "application/javascript"
    res.set("Content-Type", type);
    console.log(contents.Body);
    res.send(contents.Body);
})

app.listen(3001);