
// קודם נגדיר משתנים 

let num
let array=[]
let i
let t
let sum=0
let temp



// נקלוט מספרים למערך

for (i=0; i<6;i++){
    num=+prompt("enter number")
    array[i]=num  
    // נמצא את סהכ הסכום
    sum+=array[i]
}

console.log(array)
console.log(sum)

// לבדוק אם תא שווה לסכום שאר התאים

for (t=0; t<6; t++){
    temp=sum-array[t]
       if(array[t]==temp){
           console.log("מספר שווה לסהכ סכום שאר התאים", array[t])
    }
}






// const num=5;
// debugger
// if(num==5){
//     debugger
//    console.log("yeeeyyy")

// }else{console.log("buzzzz")}