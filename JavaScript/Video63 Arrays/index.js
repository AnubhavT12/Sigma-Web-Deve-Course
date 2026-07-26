let arr = [1,2,3,4,5];

console.log(arr);

arr.push(6);

console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(900);
console.log(arr);

console.log(arr.length);

arr1 = [1,2,3,4];
arr2 = [5,6,7,8];
arr3 = [9,10,11,12];

let arr4 = arr1.concat(arr2);
console.log(arr4);

let arr5 = arr1.concat(arr2,arr3);
console.log(arr5);

console.log(arr5[8]);
console.log(arr5[11]);

console.log(arr5.indexOf(10));

arr5.splice(4,0,100);
console.log(arr5);