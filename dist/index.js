"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aws_sdk_1 = require("aws-sdk");
const app = (0, express_1.default)();
const s3 = new aws_sdk_1.S3({
    apiVersion: '2012-11-05',
    accessKeyId: 'AKIASRLANABZOYYOEBBS',
    secretAccessKey: '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',
    region: 'ap-south-1'
});
app.get('/*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const host = req.hostname;
    console.log(host); //id.muiltiply.com
    const id = host.split(".")[0]; // [id,multiply,com]  // id refers to the project id
    console.log(id);
    const filePath = req.path; //we take this file's path and id then we extract from s3 and  forward the files
    // const contents = await s3.getObject({
    //     Bucket: "multiplyvercel",
    //     Key: `dist/${id}${filePath}`
    // }).promise();
    // const type = filePath.endsWith("html") ? "text/html" : filePath.endsWith("css") ? "text/css" : "application/javascript"
    // res.set("Content-Type", type);
    // console.log(contents.Body);
    // res.send(contents.Body);
}));
app.listen(3001);
