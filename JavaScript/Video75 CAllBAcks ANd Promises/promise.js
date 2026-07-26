alert('this is a alert made by promise alt');

console.log('console.log print using promise clog');

let prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("yes i am done")
        resolve("anubhav done")
    }, 3000);
})

prom1.then((a) => {
    console.log(a)
})