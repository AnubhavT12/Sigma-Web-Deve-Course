//there are 2 ways to make modules in node js (EcmaScript (ES6) and CommonJS)

//npm init : ans set of ques
//npm init -y : skip ques

// after running the command we get package .json
//now we can go inside package.json to edit our content

// we are first installing 3 modules today
//npm i express jsonwebtoken dotenv // al the 3 modules are installed // modules r someone else code we can use in our script

//we will borrrow example from node js learn agian , its a basic server copy paste it

const { createServer } = require('node:http');          //we by default got http module and used require syntax
import http from "http"


// const fs = require("fs")
// fs.ReadStream //fs.createReadStrema



const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {             // the serever is created using create server method which is part of http module
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');              // text/ plain => text/HTML      // it shows how content output will be dispalyed
  res.end('<h2> Hello World </h2>');                   // To change hello world into h2 we change plain to html |
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// now to see h2 we run "node main.js" in terminal // still showing exact text as written everything is correct it is just not updated
// if we had changed plain to html first and then run it would have shown h2 type heading
// to update server in changes we use "npm install --global nodemon" it will install for all file in comp.
//to watch over this file we run "nodemon main.js npm" // now it is as and htnl file

// to import any module we have to use require.
// such as we can import fs module and use their functions. // this is what we are using common js to import modules which use require


// now we go to package.json and chanege types: common  TO  types : module we cannot use require we use from  

import {a} from "./my-Module.js"
console.log(a)