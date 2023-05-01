
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

    function removeChar(str,indexs){

        part1 = str.substring(0, indexs);
        part2 = str.substring(indexs + 1, str.length);
       console.log(part1+part2)

        // var re=world.replace(world.indexOf(world.charAt(world.indexOf())),"");

        // var charValue=world.charAt(indexs);
        // // var indx=charValue.replace(charValue,"a");
        // console.log(charValue);
    //     var ind=indexs;
    //    var resultss = world.slice(ind, ind);
    //    console.log(resultss);
    }

    removeChar("Orange",3);


  // --------------------------Q9---------------------

        function merges(val1,val2){
            let part1 = val1+"";
            let part2 = val2+"";
         
            console.log(part1.substring(1, part1.length)+part2.substring(1, part2.length));
        }
        merges("lora","inge");


        
  // --------------------------Q10---------------------
  function specificChar(char,str){
    
    var firstChar=str.slice(0,1);
    var lastChar=str.slice(str.length-1,str.length);
    if(firstChar==char || lastChar==char)
    return true;
    else
    return false

  }
  console.log("orange is "+specificChar("o","orange"));
  console.log("orange is "+specificChar("n","orangez"));


    // --------------------------Q11---------------------
    function convertArray(str){
    
        var arr=str.split(" ");
        console.log(arr);
      }
      convertArray("Coding Academy by Orange")

  // --------------------------Q12---------------------
    function sortAlpha(str){
    var arrChar=str.split("").sort().join('');

        // for(var i=0;i<str.length;i++){
        //     arrChar[i]=str.slice(i,i+1);
        // }

        // var y=arrChar[x];
        // for(var x=0;x<arrChar.length;x++){
        //     if(arrChar[x]>arrChar[x+1]){
        //     arrChar[x]=arrChar[x+1];
        //     arrChar[x+1]=y;}
        // }
        console.log(arrChar);

    }

    sortAlpha("orange");


    // ------------------------------------------ Object --------------------------

      // --------------------------Q1---------------------
    function objToArray(obj){
        console.log(Object.keys(obj));
    }

    var object = { 70: 'x', 21: 'y', 35: 'z' };
    objToArray(object);


     // --------------------------Q2---------------------
     function countProperties(obj) {
        return Object.keys(obj).length;
      }

      const obj = {a: 1, b: 2, c: 3};
console.log(countProperties(obj)); // Output: 3


 // --------------------------Q3---------------------

 function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }

  const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj); 


 // --------------------------Q4---------------------

 function convertObjectToUppercase(obj) {
    const newObj = {};
    for (const property in obj) {
      newObj[property.toUpperCase()] = obj[property];
    }
    return newObj;
  }


  const objs = {name: 'John', age: 30, city: 'New York'};
const newObj = convertObjectToUppercase(objs);
console.log(newObj);

 // --------------------------Q5---------------------

function removeNullProperties(obj) {
    const newObj = {};
    for (const property in obj) {
      if (obj[property] !== null) {
        newObj[property] = obj[property];
      }
    }
    return newObj;
  }


  const objss = {name: 'John', age: null, city: 'New York', occupation: null};
const newObjs = removeNullProperties(objss);
console.log(newObjs); 




 // --------------------------Q6---------------------

function sortObjectPropertiesAlphabetically(obj) {
    const propertyNames = Object.keys(obj).sort();
    return propertyNames;
  }


const obja = {name: 'John', age: 30, city: 'New York'};
const sortedProperties = sortObjectPropertiesAlphabetically(obja);
console.log(sortedProperties);