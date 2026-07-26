console.log("Javascript initializing")
let boxes = document.body.getElementsByClassName("box")
console.log(boxes)

//boxes called now make array

// Array.from(boxes).array.forEach(e => {
//     console.log(e)
// });

//Now making a function to get random colors
// a + r (b-a) (to get random no. btw a and b)

function getrandomcolor(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return 'rgb(${val1}, ${val2}, ${val3})'
}

Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getrandomcolor()
    e.style.color = getrandomcolor()
});