
console.log(" קלוט מספר והצג את השלם הזוגי הגדול ממנו והקרוב ביותר אלי")

let num1= prompt("enter a number")

 console.log("the number",num1)
//  num1=parseInt(num1)

 num2=0
 num3=0
 num4=0
 num5=0
 answer=0

 num2=num1*10
 num3=num2%10
 num4=(num2-num3)/10
 num5=num4%2
 

 console.log("multiply",num2)
 console.log("find the bla",num3)
 console.log("find the number",num4)
 console.log("odd or even",num5)


 if(num5==0){
answer=num4+2,console.log(answer)

 }else{answer=num4+1, console.log(answer)}


//  console.log("answer", answer)

// why didnt it let me print the final answer after the if condition?


