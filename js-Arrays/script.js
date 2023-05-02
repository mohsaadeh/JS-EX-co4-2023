// ---------------------Q1-------------------------

const arrNu=[1,2,3,4,5];

for(let items in arrNu){
    console.log(arrNu[items]);
};


// ------------
console.log("------------------another Solve-----------");
const arrNu2 =[1,2,3,4,5];
arrNu2.forEach(printNu);

function printNu(items){
console.log(items);
}


// ------------
console.log("------------------Q2-----------");

const arrNu3 =[1,2,3,4,5];
console.log(arrNu3.map(n => n*2))


// ------------
console.log("------------------Q3-----------");

const arrNu4 =[1,2,3,4,5];
console.log(arrNu4.filter(n => n%2==0))



// ------------
console.log("------------------Q4-----------");
const arrNu5 =[1,2,3,4,5];
console.log(arrNu5.reduce((prev,curr) => prev+curr,0));

// ------------
console.log("------------------Q5-----------");
const arrNu6 =["apple", "cherry","banana" ];
console.log(arrNu6.sort());

// ------------
console.log("------------------Q6-----------");
const arrNu7 =["apple", "cherry","banana" ];
console.log(arrNu7.reverse());


// ------------
console.log("------------------Q7-----------");
const arrNu8 =[1,2,3];
const arrNu9 =[4,5,6];
console.log(arrNu8.concat(arrNu9));


// ------------
console.log("------------------Q8-----------");
const arrNu10 =[1,2,3,4,5];

console.log(arrNu10.slice(2,4));


// ------------
console.log("------------------Q9-----------");
const arrNu11 =[1,2,3,4,5];
console.log(arrNu11.indexOf(2));

// ------------
console.log("------------------Q10-----------");
const arrNu12 =[1,2,3,4,5];
console.log(arrNu11.join());

// ------------
console.log("------------------Q11-----------");
const arrNu13 ="1,2,3,4,5";
console.log(arrNu13.split(","));

// ------------
console.log("------------------Q12-----------");
const arrNu14 =[1,2,3,4,5];
console.log(arrNu14.length);


// ------------
console.log("------------------Q13-----------");
const arrNu15 =[1,2,3,4,5];
var out="";
for(var i=0;i<arrNu15.length;i++){

out+=arrNu15[i]+" ";
}

console.log(out);


// ------------
console.log("------------------Q14-----------");

const arrNu16 =[1,2,3,4,5];
var out="";
for(var i=0;i<arrNu16.length;i++){

out+=i+" ";
}

console.log(out);


// ------------
console.log("------------------Q15-----------");

const arrNu17 =[1,2,3,4,5];
console.log( Array.isArray(arrNu17));

// ------------
console.log("------------------Q17-----------");

var obj={0: "a", 1: "b", 2: "c", length: 3};
console.log(Array.from(obj));


// ------------
console.log("------------------Q18-----------");
console.log(Array.of(1, 2, 3));


// ------------
console.log("------------------Q20-----------");
const array18 = [1, 2, 3, 4];
console.log(array18.fill(14, 2, 4));

// ------------
console.log("------------------Q21-----------");
const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(1, 2, 4));

console.log("------------------Q21-----------");
const array123 = ['a', 'b', 'c', 'd', 'e'];
console.log(array123.copyWithin(0, 2,4));


