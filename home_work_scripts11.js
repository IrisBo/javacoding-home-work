
// קודם נגדיר משתנים
let num
let temp
let array=[]
let array2=[]
let array3=[]
let array4=[]

let i
let t
// let len

// נקלוט משתנים לתוך מערך

for (i=0; i<6; i++){
    num=+prompt("enter number");
    array[i]=num;
      }

len=array.length
console.log(array)
console.log(len)




// הדרך של יניר
for (i=0; i<3; i++){
temp= array[i]
array[i]=array[i+3]
array[i+3]= temp

}
console.log(array)


// לנסות לפתור דרך הוספת מערכי ביניים

// for (t=5; t>=0; t--){
//      if (t>=3) {
//         array2[t-3]=array[t]

//         // array4.push(array[t])
//      }
//      else {
        
//         array3[t]=array[t]
//         // array4.push(array[t])
//      }
// }


// console.log(array2)
// console.log(array3)
// // console.log(array4)