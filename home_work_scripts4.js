
console.log(" קלוט נתון דו ספרתי והדפס את סכום ספרותיו.")

let num1= prompt("enter 2 digit number")

 console.log("the number",num1)

FirstDigit=0
LastDigit=0
Sum=0

LastDigit=num1%10
FirstDigit=(num1-LastDigit)/10
Sum= FirstDigit+LastDigit

console.log("the sum is",Sum)






