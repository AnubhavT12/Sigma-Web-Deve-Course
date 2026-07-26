console.log("acc to code : execution order should be a then b c d at last e")

console.log("but due js asynchronous nature , execution order has different priorites , here consolelog has topmost priority than setimeout and setinterval")

console.log("a is typing")
console.log("b is cooking")

setTimeout(() => {
    console.log("c is sleeping")
}, 3000);

console.log("d is drawing")

setInterval(() => {
   console.log("e is ending") 
}, 2000);

const fn () => {
  console.log("Noting")
}


const callback = (arg , fn) => {
  console.log(arg)
  fn()
}


const loadscript = (src , callback) => {
  document.createElement.("script");
  sc.src = src
  sc.onlaod = callback("Anubhav" , fn);
  document.head.append(sc)
}

loadscript("https//google.com" , callback )