let button = document.getElementById("btn1");
let button2= document.getElementById("btn2");
let button3= document.getElementById("btn3");
let button4= document.getElementById("btn4");

button.addEventListener("dblclick" , ()=>{
    document.querySelector("#btn1").innerHTML = "<b>this was changed</b>"
})

button2.addEventListener("click" , ()=>{
    alert("I Was Clicked")
})

button3.addEventListener("contextmenu" , ()=>{
    alert("*Insert Right Click Menu Here*")
})

button4.addEventListener("keydown" , (e)=>{
    console.log(e.key , e.keyCode)
})