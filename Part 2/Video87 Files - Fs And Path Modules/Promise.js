import fs from "fs/promises"

let a = await fs.readFile("anu.txt")
console.log(a.toString())

// let b = await fs.writeFile("anu.txt", "this is a promise example")
let b = await fs.appendFile("anu.txt", "this is a promise example too many times \n\n\t")
console.log(a.toString(), b)