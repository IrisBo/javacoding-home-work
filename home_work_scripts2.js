// קלוט אורך של סרט קולנוע בדקות והצג את אורך הסרט בשעות ודקות.

console.log("enter movie lenght in minutes")

let num1= prompt("enter movie lenght in minutes")

num1=parseInt(num1)
let hours=+0
let minutes=+0

minutes=num1%60
hours=(num1-minutes)/60

console.log("hours",hours)
console.log("minutes",minutes)


if (minutes>0) {console.log("total lenght",hours,".",minutes)}

else{console.log("total lenght", hours)}





// const num=5;
// debugger
// if(num==5){
//     debugger
//    console.log("yeeeyyy")

// }else{console.log("buzzzz")}