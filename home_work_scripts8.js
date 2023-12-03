let num
let i
let array=[]
let sum=0
let counter=0
let avg
 
// קודם לקלוט מספרים למערך

for (i=0;i<6;i++){
num=+prompt("enter number")
array[i]=num
// לבדוק אם מספר זוגי
if(array[i]%2==0) {
    //לחשב סכוםע
    sum+=array[i];
    counter++
}
}
// לחשב ממוצע
avg=sum/counter

console.log("these are the numbers:",array)
console.log("even numbers average:", avg)











// const num=5;
// debugger
// if(num==5){
//     debugger
//    console.log("yeeeyyy")

// }else{console.log("buzzzz")}