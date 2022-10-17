import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';


import * as crypto from 'crypto';
import * as fs from 'fs';
import { join } from 'path';

import { ObjectId, MongoClient } from 'mongodb';


export const api = express.Router();


const dbUrl =
//   'mongodb+srv://angular-universal:abcd1234@cluster0.bcfzj.mongodb.net';
"mongodb://localhost:27017/universalDB"
const dbClient = MongoClient.connect(dbUrl, {
}).then((connection) => connection.db('cluster0'));

dbClient.then(() => {
  console.log('Connected to the database.');
});


api.use(
    cors({
      origin: true,
      credentials: true,
    })
);
api.use(bodyParser.json());

const key = fs.readFileSync(
    join(process.cwd(), 'privkey.pem'),
    'utf8'
);
  
function encrypt(toEncrypt: string): string {
    const buffer = Buffer.from(toEncrypt);
    const encrypted = crypto.privateEncrypt(key, buffer);
    return encrypted.toString('base64');
}

function decrypt(toDecrypt: string): string {
    const buffer = Buffer.from(toDecrypt, 'base64');
    const decrypted = crypto.publicDecrypt(key, buffer);
    return decrypted.toString('utf8');
}