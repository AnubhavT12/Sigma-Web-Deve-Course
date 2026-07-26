
async function getdata () {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

async function main(params) {
    
}

console.log("laoding modules")

console.log("do something else")

console.log("load data")
let data = await getdata()
console.log(data)
                                // after laod data it execution should wait to process data, and for that wait we use
console.log("process data ")    // if we want wait for a async get data function, we use await in it and we create another main func (here)

console.log("task 2")