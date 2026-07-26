console.log("hello world this is on the server")

// if we type node server.js it will print the above statement in terminal

//and if we want to use this for code for long term we can use npm to store and use our written code
//we can initialize this as an npm project by using
//npm init
//after this it will ask for various detials to filled by us like name ver desc keywords author license and we get a package.jsom
// now in package .json

// we have init this as as a single package entity and now e can install various packages in this
// we can now give command npm install and add various packages such as the
// google searched slugify , now we run the command
//npm install slugify
//we get node_modules with 2 folder (slugify folder and .package-lock.json), it will hold most of the packages
//and we get package-lock.json
// now we can use slugify code written by someone else in our backend
//node modules hold most of the code in vastly huge amounts
//this slugify pckg converts strings to proper URLs (removes special, not allowed characters)

// now writing code in server.js
//

var slugify = require(`slugify`)

let a = slugify(`some type of string`)  //some string (spaces not allowed in url)
console.log(a)                          //slufgify ver will have url perfect string


// if u prefer any other seprator then "-" (minus) use , then ur preferred seprator such as "_" (underscore)
let b = slugify(`Some&other tpyeof string`, "_")
console.log(b);

//npm is equals to node packet manager


//now go to myserver.js
