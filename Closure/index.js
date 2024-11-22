// function outer() {
//     let count = 0;
//   return  function inner() {
//       count++;
//       return count;
//     }
    
// }
// const counter = outer();
// console.log(counter());//1
// console.log(counter());//2
// console.log(counter());//3
////////////////////////////////////////
// for (var i = 0; i < 5; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }
/////////////////////////////////////////////////////
// for (let i = 0; i < 5; i++){// let i= create a new i for every i ,so settimout get diffrent i
//      setTimeout(() => {
//         console.log(i)
//      }, 1000);
// }
