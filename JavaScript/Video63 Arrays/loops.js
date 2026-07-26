a = [1, 22, 3, 44, 5]

// for loop for displaying elements of the array

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
    
// }


// for each loop for array
// it gives each element of the array and also the index and the whole array as well
// it starts with a.forEach

// a.forEach((value , index , array) => {
//     console.log(value , index , array);
    
// });

// for in loop for array
// used for obejects related things

// let objectubhav = {
//     a: 1,
//     b: 2,
//     c: "anubhav",
//     d: 4
// }

// for (const key in objectubhav) {
//     if (!Object.hasOwnProperty.call(objectubhav, key)) continue;

//     const element = objectubhav[key];
//     console.log(element);
// }

// for of loop. it is used only for arrays and it gives the value of the array not the index and the whole array.

for (const iterator of a) {
    console.log(iterator)
    
}
