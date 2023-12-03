
let num
let i
let t
let array=[]
let sum=0
let avg

for (i=0;i<6;i++){
num=+prompt("enter number")
array[i]=num
sum+=array[i]
}


avg=sum/array.length

console.log("these are the numbers:",array)
console.log("this is the total sum:", sum)
console.log("this is the avg:",avg)


for(t=0;t<6;t++){
    if(array[t]>avg){
        console.log("bigger then average:", array[t])
    }
}




