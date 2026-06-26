  //1.ways to print in javascript
        console.log("Hello World");
        //console.write("Not usually used that much but knowing purposed use it");
        //alert("Alert msg on display");
    //2.Javascript console API---(api=Application program interface)
        console.log("hello world" );
        console.warn("warning message");
        console.error("Error message");

function avg(a,b){
    console.log("Function exectued!");
    return (a+b)/2;
}
c1=avg(10,20);
console.log(c1);

var arr=[10,20,30,40];
console.log(arr);

//Arrow function
const functionnew =(num)=>{
    return num*num;
};

const call=functionnew(4);
console.log("print",call);

//Destructuring-means values of array or object get transfer in variables
//array destructuring
const colors=["Red","blue","purple"];
const[first,second]=colors;
console.log("index 1st:",first);
console.log("index 2 element:",second);
//object destructuring
const student={
    name:"mayuri",
    class:"Sybcs",
    couse:"js practice"
};
console.log(student.name);
const classcheck=student.class;
console.log("class:",classcheck);

//Rename variable
const {name:studentname,age} =student;
console.log("name=",studentname);

const laptop={
    brand:"dell",
    ram:"12gb",
    cost:"50,000"
};//object created

//values storing in variables using destructuring
const RAMM=laptop.ram;
console.log("Ram of laptop:",RAMM);
