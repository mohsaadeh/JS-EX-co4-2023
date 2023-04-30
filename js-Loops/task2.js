// ---------------------Q1-------------------
console.log("1. Write a script to print out all even numbers between 1 and 50, twice. Use 1 for loop and 1 while loop.");
var evenNum="";
for(var i=1;i<=50;i++){
    while(i%2==0){
        evenNum+=i;
        break;
    }
}

console.log(`The Even Number from 1-50 ${evenNum} `);
console.log("------------------------------------------------");
// ---------------------Q2-------------------
console.log("2. Try solving the previous exercise using a single for loop.");
var evenNum="";
for(var i=1;i<=50;i++){
    if(i%2==0){
 
        evenNum+=i;
    }
}
console.log(`The Even Number from 1-50 ${evenNum} `);
console.log("------------------------------------------------");

// ---------------------Q3-------------------
console.log("3. Resolve Exercise 1 so that one loop prints out even numbers and the second prints out the odd ones.");
var oddNum="";
var evenNum="";
for(var i=1;i<=50;i++){
    if(i%2==0){
        evenNum+=i;
      
    }
    else{
        oddNum+=i;
     
    }
}
console.log(`The Even Number from 1-50 ${evenNum} `);
console.log(`The Odd Number from 1-50 ${oddNum} `);
console.log("------------------------------------------------");


// ---------------------Q4-------------------
console.log("4. Fizz-Buzz! Write a script that does the following:");

var out="";

for(var i=1;i<=100;i++){
     if(i%3==0 && i%5==0){
        out+="FizzBuzz ";
    }
    else if(i%3==0){
        out+="Fizz ";
    }
    else if(i%5==0){
        out+="Buzz ";
    }

    else
    {
        out+=i+" ";
    }
}
console.log(out);
console.log("------------------------------------------------");

// ---------------------Q5-------------------
console.log(" 5. Rewrite the script with a function so that each iteration will trigger a function call.");
function fizzBuzz(number){
    var output="";
     if(number%3==0 && number%5==0){
        output="FizzBuzz ";
    }
    else if(number%3==0){
        output="Fizz ";
    }
    else if(number%5==0){
        output="Buzz ";
    }
    else
    {
        output=number+" ";
    }
    return output
}
console.log(fizzBuzz(15));
console.log("------------------------------------------------");


// ---------------------Q6-------------------
console.log("6. Create a recursive solution. A FizzBuzz function calls itself to continue the series.");
var output="";
var count=1;
function checkNumbers(count){
    if(count>100)
    {
        console.log(output);
        return;
    }
     if(count%3==0 && count%5==0){
        output+="FizzBuzz ";
    }
    else if(count%3==0){
        output+="Fizz ";
    }
    else if(count%5==0){
        output+="Buzz ";
    }
 
    else
    {
        output+=count+" ";
    }
    count++;
    checkNumbers(count)

  
    // num++;
    // checkNumbers(num);

}
checkNumbers(1);


// function checkNumber(count){
//     if(count<100)
// {
//     var output="";
//     var count=1;
//     if(count%3==0){
//         output+="Fizz ";
//     }
//     else if(count%5==0){
//         output+="Buzz ";
//     }
//     else if(count%3==0 && count%5==0){
//         output+="FizzBuzz ";
//     }
//     else
//     {
//         output+=count+" ";
//     }
//     count++;
//     checkNumber(count)
// }
//     // if(count<=100){
//     //    
// // }
// return output
// }




//   var result= checkNumber(1);

// console.log(result+" ");

console.log("------------------------------------------------");



// ---------------------Q7-------------------

console.log("7. Write a function that takes a number and converts it to certain banknotes.");

function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(57, [25, 10, 5, 1]));