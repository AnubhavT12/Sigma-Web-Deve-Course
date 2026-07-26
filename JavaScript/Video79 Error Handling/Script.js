// let a = prompt("enter first no.");

// let b = prompt("enter 2nd no.");

// let sum = a + b      wrong usage

// console.log("the sum of no.s is " + sum)

let a = prompt("enter first no.");

let b = prompt("enter 2nd no.");

if (isNaN(a) || isNaN(b)) {
	throw new SyntaxError("Soorrry this is innnvaaalid");       // to show/handle user error
}

let sum = parseInt(a) + parseInt(b)     //correct usage

try {                                                     //to show/handle network or any othe external error
    
    console.log("the sum of the nos. is " + sum*x)          // x is undefined so it will show catch error(not user error ext error)
    
} catch (error) {
    console.log("Oh Man Another Errorrrrrr...")         
}

finally {
    console.log("FINALLLLYYY!! all the files are being closed broooo") // Use Finally bcos we can run the script even after execution while using in functions
}                                                                           // for exa in try return true , in catch return false after any 1 is selected
                                                                        // execution of script of func. will not go further and msg will not show
                                                                        // thats why we use fnally it will show even when using functons.