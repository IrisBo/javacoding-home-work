//   קלוט שלושה ערכים. הצג את סכומם ואת הממוצע שלהם.

console.log("enter 3 numbers")

let num1= prompt("please enter first number")
let num2= prompt("please enter second number")
let num3= prompt("please enter third number")
num1=parseInt(num1)
num2=parseInt(num2)
num3=parseInt(num3)

let avg=0
let sum=0

sum=num1+num2+num3
avg=sum/3

console.log("first number",num1)
console.log("second number",num2)
console.log("third number",num3)
console.log("total sum is",sum)
console.log("avg is",avg)





