
// --------------------------Q1-------------------

const OrangeArray=["Coding", "Academy", "By", "Orange"];
OrangeArray.push("Jordan")
console.log(OrangeArray);
OrangeArray.pop();
OrangeArray.pop();
OrangeArray.pop();
console.log(OrangeArray);
OrangeArray.unshift("Wlecome","To");
OrangeArray.push( "By", "Orange");
console.log(OrangeArray);
OrangeArray.shift();
OrangeArray.shift();
OrangeArray.shift();
console.log(OrangeArray);
OrangeArray.unshift("Coding");
var arrayOutput="";
for(var i=0;i<OrangeArray.length;i++){
arrayOutput+=OrangeArray[i]+" ";
}
console.log(arrayOutput);

console.log(OrangeArray);

OrangeArray.pop();
OrangeArray.pop();
OrangeArray.pop();
OrangeArray.push("Orange");
console.log(OrangeArray);


// --------------------------Q2-------------------

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop();
fruit.shift();

console.log(fruit);
console.log(vegetables);
console.log(fruit.indexOf("orange"));
fruit.push(1993);
console.log(fruit);
console.log(vegetables.length);
vegetables.push(2000);
console.log(vegetables);
const food=fruit.concat(vegetables);

console.log(food);


var removed = food.splice(4,2);
console.log(food);

console.log(food.reverse());

console.log(food.toString());


// ------------------------------------------ Function --------------------------

// --------------------------Q1---------------------
function convertToArray(statment){
 const spaceCount=  statment.split(' ');
console.log(spaceCount)
}

convertToArray("Orange Jordan");


// --------------------------Q2---------------------
function hiddNum(statment){
let value=statment.toString();
console.log("*******"+value.slice(value.length-3,value.length));
}
hiddNum("0799914115");


// --------------------------Q3---------------------
function hiddEmail(statment){
    let value=statment.toString();
    let firstSection=value.slice(0,value.indexOf("_")); 
    let secondeSection = value.slice(value.indexOf("@")); 

    console.log(firstSection+"...."+secondeSection);
    }
    hiddEmail("orange_academy@orange.com");


    // --------------------------Q4---------------------
    function convertToUpper(statment){
        let value=statment.charAt(0).toUpperCase()+statment.slice(1);
        console.log(value);
    }
    convertToUpper("coding academy by orange");

      // --------------------------Q5---------------------
      function convertStatmentToUpper(str){
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        
        }
        const str2 = arr.join(" ");
        console.log(str2);
    }
    const str = convertStatmentToUpper("coding academy by orange");

    // --------------------------Q6---------------------

    function flipNumber(str){
        var result="";
        for(var i=str.length;i>=0;i--){
            result+=str.charAt(i);
        }
        console.log(result);

    }
    flipNumber("123456");

    // --------------------------Q7---------------------


function swaps(num1,num2){
    console.log("a= "+num2+","+"b= "+num1)
}

var a=3,b=4;
swaps(a,b);


    // --------------------------Q8---------------------

    function removeChar(world,indexs){
        // var re=world.replace(world.indexOf(world.charAt(world.indexOf())),"");

        // var re=world.replace(world.charAt(world.indexOf(indexs)),"");
        var charValue=world.charAt(indexs);
        var indx=charValue.replace(charValue,"a");
        console.log(indx);
    }

    removeChar("Hello",1);
