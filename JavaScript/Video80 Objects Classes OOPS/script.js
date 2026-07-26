// let obj = {
//     name : "Anu",
//     code : 23
// };

// console.log(Object)

// in js u will get another object in a object called prototype that can be used to run function to modify the object
// you can see it in console
//obj.name can be printed obj.code can be printed but obj.salary can also be printed by using prototype

// let animal = {
//     eats : true,
// };

// let rabbit = {
//     jumps : true,
// };

// rabbit.__proto__= animal;

class animal{

    constructor(name){
        this.name = name
        console.log("obejct is created ...")
    }

    eats(){
        console.log("eatingggggg")
    }

    jumps(){
        console.log("juuuuumppiiing")
    }
}

class lion extends animal{           // now we want to make new class lion that does everythin we as animal either we can copy paste or use extend

    constructor(name){
        super(name)                                                 //now lion inherited prop fform animal using extend but to inherit cosntructor we use super() tag
        console.log("obejct is created and HE IS A LION!!!...")
    }
}

let a = new animal("bunny");
console.log(a)

let l = new lion("shera")
console.log("l")