async function sleep() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

(async function main() {

//     let a = await sleep()
//     console.log(a);                     // 1) "IIFE"Function (immediately invoked function expression)
//     let b = await sleep()
//     console.log(b);




function sum (a, b, c){                     // 3) SPREAD SYNTAX
    return a+b+c
}






// 2) "DESTRUCTURING"

// let x,y = [1,5]
// console.log(x,y)   //first undefine then 1 & 5

// let [x,y, ...rest] = [1,5,7,8,9,10]
// console.log(x,y,rest)           //...rest is a suer defined variable name can be changed it will store rest of the values rest = [7,8,9,10]


// let obj = {
//     a : 1,
//     b : 2,
//     c : 5
// }

// let {a, b} = obj        // to pull out 2 3 things only from a very big object put a b in curly brackets
// console.log(a, b)







let arr = [1, 4, 6]                             //spread syntax part 2
// console.log(arr[0] + arr{1} + arr[2])  OR //console.log(sum(arr[0],arr[1],arr[2]))      // hard way to to get sum 11
console.log(sum(...arr))



})()