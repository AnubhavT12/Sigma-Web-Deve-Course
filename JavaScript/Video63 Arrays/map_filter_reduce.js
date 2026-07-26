arr = [1, 2, 33, 4, 57]

// now to make new array for example with square of the elements of array we can use for loop like this

// let newarr = []

// for (let index = 0; index < arr.length; index++){
//     const element = arr[index];
//     newarr.push(element**2)
// }
// console.log(newarr)

// it gave the squared result of array elements but it is a very lengthy process and we can do it in a very simple way using map function

//my failed code write only e**2 the function
// let newarr = arr.map((e)=>
//     e = e**2;
// console.log(mewarr)

// fixed working Code 
// you can also add (e , value , array) for respective display
// let newarr = arr.map((e)=>
//     e**2
// );
// console.log(newarr)

//filter for arrays used for displaying elements with a given condition by using a function

// const greaterthan7 = (e)=>{
//     if (e>7){
//         return true;
//     } 
    
// return false;
// }

// console.log(arr.filter(greaterthan7))



// reduce property takes starting two elements form a result by applying the given function
//  and then forms another result by taking the obtained result and 3rd function
// and then form new result with the now acq result with 4th element
// and it keeps going  

let arr2 = [1,2,3,4,5,6]

let red_add = (a,b) => {
    return a+b;
}

let red_mult = (a,b) => {
    return a*b;
}

console.log(arr2.reduce(red_add))

console.log(arr2.reduce(red_mult))

