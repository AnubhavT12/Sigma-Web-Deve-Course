let a = 6

// this will form a array from given No. but it will start from 0

// function factorial(number){
//     let arr = Array.from(Array(number).keys())
//     console.log(arr)
// }

// factorial(a)



// now it will not start from 0 as

// function factorial(number){
//     let arr = Array.from(Array(number+1).keys())
//     console.log(arr.slice(1,))
// }

// factorial(a)



// now to calc a factorial declaring c variable that will sue reduce function of a*b

// function factorial(number){                         
//     let arr = Array.from(Array(number+1).keys())
//     console.log(arr.slice(1,))
//     let c = arr.slice(1,).reduce((a, b)=>a*b)
//     console.log(c)
// }

// factorial(a)


function factorial(number){                         
    let arr = Array.from(Array(number+1).keys())   // array.from se array banta hai koi bhicheez ka. arraynumber.keys matlab inki keys se banega array 0-5 apr chaiye 1 se hai toh + 1
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b)=>a*b)       // we make a function c to multiply the elements 1 by 1 using reduce finction
    console.log(c)
}

factorial(a)

function facfor(number){
    let fac = 1;
    for (let index = 1; index <= number ; index++) {
        fac = fac * index
    }

    return fac
}

console.log(facfor(a))
console.log(factorial(a))
