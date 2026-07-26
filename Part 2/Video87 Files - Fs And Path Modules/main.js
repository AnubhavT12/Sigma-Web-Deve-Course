const fs = require ("fs")

// console.log(fs)

console.log('starting');
// fs.writeFileSync("anu.txt", "anu is a fullstack dev")
fs.writeFile("anu2.txt", "anu will be a fullstack dev", ()=>{
    console.log("Function Done")
    fs.readFile("anu2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("anu2.txt", "Coding Round 2", (e, d)=>{
    if (e) {
        console.error(e)
        return
    }
    console.log(d)
})
console.log('ending');

