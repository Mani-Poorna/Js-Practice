// varibles Var let const
// let array = [1,32,23,34,54,65,7];
        //   0  1  2  3 4  5  6
// console.log(array[34]);
// console.log(array.length)

// slice 
// let arr1 = array.slice(2,6);
// console.log( typeof arr1)

// splice( start, delete, additon)
// console.log(array)
// let arr2 = array.splice(1,1,40,40,50,60);
// console.log(arr2)
// console.log(array);


// shift pop -> remove;
// unshift push -> add

// stores anydata type
// let arrays = ["mani",10,true]; #100
// let array2 = ["mani",10,true];  #900

// undefined Not-defined

// let array = [1,32,23,34,54,65,7];
// array[6];
// console.log(b)

//  OBJECTS

// let obj = {
//     email : "xyz@123gmail.com",
//     password : "maniporna122"
// }

// id  : 200;
// email :ahsjhakj
// pass : 

// if(){
//     // email correct -> check pass -> login
// }else{
//     // incorrect pssword
// }
// object => KAY : VALUE (format)

// let obj = {
//     id : 10,
//     email : "xyz@123gmail.com",
//     password : "maniporna122",
//     obj1 : {email : "xyz@123gmail.com",password : "ratnam123"},
//     array : [1,2,3,5,"mani",1,{name : "rantam", branch : "royal civil"}]
// }
// let pass = "facebook";
// console.log(obj[pass]); -> passing Variable
// // arr[3]
// console.log(obj.array[6].branch); -> dot notation.
// console.log(obj['password']) -> index-Notation
// console.log(obj.mani)  undefined output;


// let obj = {
//     id : 10,
//     email : "xyz@123gmail.com",
//     password : "maniporna122",
//     obj1 : {email : "xyz@123gmail.com",password : "ratnam123"},
//     array : [1,2,3,5,"mani",1,{name : "rantam", branch : "royal civil"}]
// }

// for(let i=0;i<array.length;i++){
    //code
// }
// diff types of for loops
// for in (index)
// for of (keys)

// let array = [1,32,23,34,54,65,7];//7

// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

// for(let x in array){
//     console.log("value : ",array[x],"Index : ", x);
// }

// for(let x of array){
//     console.log(x);
// }

// let obj = {
//     id : 10,
//     email : "xyz@123gmail.com",
//     password : "maniporna122",
//     obj1 : {email : "xyz@123gmail.com",password : "ratnam123"},
//     array : [1,2,3,5,"mani",1,{name : "rantam", branch : "royal civil"}]
// }

// for(let x in obj){
//     console.log(obj[x]);
// }

// ************************  FUNCTIONS  ****************

// public static int functionName(){

// } 

// function a(){
//     console.log("inside A");
//     function d(){
//         console.log("Inside D");
//     }
//     return d;
// }

// console.log(a());
// a();
// let result = a();

// console.log(result);

// function add(a,b){
//     console.log(a+b);
    // return a+b;
// }
// let c;
// console.log(typeof c)
// add(2,3,8);

// let ans = add(5,10);

// console.log(ans)

// let a = function(){
//     console.log("inside a")
// }

// a();

//ARROW FUNCTION

// let a = () => {
//     console.log("12423");
// }
// a();

// function a(){
//     console.log("inside A");
//     function d(){
//         // console.log("Inside D");
//         return 10;
//     }
//     return d;
// }

// let ans = a();
// function a1(a,b){
//     console.log(a);
//     console.log(b());
// }

// a1(5,ans);

// let ans1 = ans();
// console.log(ans1);
// console.log(typeof ans)

//  SCOPE

// function a(x){
//     console.log(x);

//     function b(y){
//         setTimeout(()=>{
//             console.log(z);
//         },3000)
//         console.log(y);
//     }

//     b(20);
// }

// call stack queue
// queue Microtask

// let z = 10;

// a(15);

// 15 20 10


// ******************* JS EXECUTION ******


//  let var const
// var a = 10
// let b = 20
// // let c = 30

// function ab(){
    
//     console.log(a) // 10
//     console.log(b) //20
//     console.log(c) // undseifne
//     // console.log("inside AB");
// }
// let c = 30
// ab();

// TEMPORAL DEAD ZONE

// let a = 20;
// let b = 40;
// let c = 30;
// function x(){
//     console.log(a);
//     function z(){
//         console.log(c);
//     }
//     let c = 50;
//     z();
//     // console.log(d);
// }
// x(); 

// var d = 20;
// console.log(d);

// // 20, 50, undef