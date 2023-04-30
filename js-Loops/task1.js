var number=0;
for(var i=1 ;i<=10;i++){
number =number+ i +" ";
}
document.getElementById("out1").innerHTML = number;


// ---------------------------- Q2---------------------

var number=0,i=1;
while (i <= 10) {
    number =number+ i +" ";
    i++;
  }
  document.getElementById("out2").innerHTML = number;


  // ---------------------------- Q3---------------------

  var arr=[1,2,3,4,5];
  var number=0;
  for(var i=0 ;i<arr.length;i++){
    number =number+ arr[i] +" ";
  }

  document.getElementById("out3").innerHTML = number;

// ---------------------------- Q4---------------------

  var number=0;
for(var i=0 ;i<=10;i++){
    if (i%2==0)
number =number+ i +" ";
}
document.getElementById("out4").innerHTML = number;


// ---------------------------- Q5---------------------


var number=0;
for(var i=0 ;i<=10;i++){
number =number+ i ;
}
document.getElementById("out5").innerHTML = number;


// ---------------------------- Q6---------------------


var number=0;
var arr=[1,2,3,4,5]
for(var i=0 ;i<=arr.length;i++){
    if (arr[i]>number)
number =arr[i] ;
}
document.getElementById("out6").innerHTML = number;


// ---------------------------- Q7---------------------


var number=1;
var arr=[1,2,3,4,5]
for(var i=0 ;i<=arr.length;i++){
    if (arr[i]<number)
number =arr[i] ;
}
document.getElementById("out7").innerHTML = number;


// ---------------------------- Q11---------------------


var number=0;
var arr=[1,2,3,4,5]
for(var i=0 ;i<arr.length;i++){
number =number+arr[i] ;
}
document.getElementById("out11").innerHTML = number / arr.length;


// ---------------------------- Q12---------------------


let numbers=1;
for(var i=1 ;i<=5;i++){
numbers*=i;
}
document.getElementById("out12").innerHTML = numbers ;



// ---------------------------- Q13---------------------



var number1=0;number2=1;numberNext=0;
var output=" ";
for(var i=0 ;i<10;i++){
output=output+number1+" ";
numberNext=number1+number2;
number1=number2;
number2=numberNext;
if(number1>8)
break;
}
document.getElementById("out13").innerHTML = output ;



// ---------------------------- Q14---------------------

let outputs=" ";
for (let i = 2; i <= 20; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        // console.log(i);
        outputs+=i +" ";
    }
}

document.getElementById("out14").innerHTML = outputs ;


// function isPrime( n)
// {
//       // since 0 and 1 is not prime return false.
//       if(n == 1 || n == 0) return false;
   
//       // Run a loop from 2 to n-1
//       for(var i = 2; i < n; i++)
//       {
       
//         // if the number is divisible by i, then n is not a prime number.
//         if(n % i == 0) return false;
//       }
//       // otherwise, n is prime number.
//       return true;
// }
 
 
// // Driver code
// var N = 20;
 
// // check for every number from 1 to N
//   for(var i = 1; i <= N; i++)
//   {
//       // check if current number is prime
//       if(isPrime(i)) {
//         console.log( i );
//       }
// }

// var N = 20;

// for(var i = 1; i <= N; i++)
// {
//         for(var x = 2; x < i; x++)
//               {
//                 if(i % x == 0) {}
//                 else{
//                     console.log(i);
//                 }
//               }
//     }
    




// var tt=2;
// for(var y=2;y<20;y++){
//     if(tt%y-1!=0){
//         console.log(y);
//     }
//     tt++
// }

// let numbera=1;
// let outputs=0;
// for(var x=1 ;x<20;x++){

// if(numbera % x==0){
//     outputs=(outputs+numbera)+" ,";
// }else{

// }

// numbera++;

// }
// document.getElementById("out14").innerHTML = outputs ;



// ---------------------------- Q15---------------------

var nu=5;
var output="";
for(var i=1;i<=10;i++){
    output=output+nu+" x "+i+"="+ i*nu +" , ";
}
document.getElementById("out15").innerHTML = output ;


// ---------------------------- Q16---------------------

let myArray = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
    ];
    var output="";
for(var i=0;i<myArray.length;i++){
    for(var x=0 ;x<myArray.length;x++){
        output+=myArray[i][x]+" ";
      
    }
}
document.getElementById("out16").innerHTML = output ;


// ---------------------------- Q17---------------------

let myArrays =[1,2,3,4,5]
    var output="";
for(var i=myArrays.length-1;i>=0;i--){
    output+=myArrays[i]+" ";
}
document.getElementById("out17").innerHTML = output ;


// ---------------------------- Q18---------------------

let myArra =[1,2,3,4,5]
    var outputa="";
for(var i=0;i<myArra.length;i++){
    if (i==2 || i==3 || i==4){
    outputa+=myArra[i]+" ";
}
}
document.getElementById("out18").innerHTML = outputa ;


// ---------------------------- Q19---------------------

let myArrax =[1,2,3,4,5]
    var outputa="";
for(var i=0;i<myArrax.length;){
    outputa+=myArrax[i]+" ";
    i=i+2;
}
document.getElementById("out19").innerHTML = outputa ;



// ---------------------------- Q20---------------------

let myArrayy =[1,2,3,4,5]
let num=4;
    var outputa="";
for(var i=0;i<myArrayy.length;i++){
    if(myArrayy[i]==num){
        outputa="true";
        break;
    }
}
document.getElementById("out20").innerHTML = outputa ;



// ---------------------------- Q21---------------------

let myArrayyFre =[1,2,1,3,1,2]
let freqNum=0;
for(var i=0;i<myArrayyFre.length;i++){
   if(myArrayyFre[i]==1){
    freqNum++;
   }
}
document.getElementById("out21").innerHTML = freqNum ;

