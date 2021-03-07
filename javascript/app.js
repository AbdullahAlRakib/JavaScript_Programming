/*
console.log('hello World');
console.warn('this is warning');
console.error('this is an error');
alert('hello');
*/


//variabele
/*
let age=20;
age=21;
console.log(age);

var ages=30;
ages=31;
console.log(ages);

const number=50;
number=51;
console.log(number);
*/


//Datatypes
/*
let name="Rakib";
console.log(name);
let age=24;
console.log(age);
isMarried=false
console.log(isMarried);
let c=null;
console.log(c);
let x=undefined;
console.log(x);
let y;
console.log(y);
*/

//concatenation
/*
const firstName="Rakib";
const lastName="Shihab";
//console.log("My First Name is" +firstName+"and my last name is"+lastName);
console.log(`His firstName is ${firstName} and his last name is ${lastName}`);
*/


//string
/*
const s="Hello World";
//console.log(s.length);
//console.log(s.toUpperCase());
//console.log(s.toLowerCase());
//console.log(s.substring(0,11));
//console.log(s.split(''));
*/


//Array
/*
const fruits=['Apple','Mango','Litchi'];
console.log(fruits);
console.log(fruits[1]);
fruits[3]='hello';
console.log(fruits);
fruits.push('world');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('ata');
console.log('fruits');
*/


//object literlas 
/*
const person={
    name:'khalil',
    age:20,
    address:{
        city:'dhaka',
        road:20
    }
}
console.log(person);
person.email='info@gmail.com',
console.log(person);
console.log(person.address.road);
*/

//arrays of objects and JSON
/*
const todos =[
    {
        id:1,
        text:'take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with Boss',
        isCompletd:true
    }

]
console.log(todos);
console.log(todos[1]);
console.log(todos[1].text);
const todoJSON=JSON.stringify(todos);
console.log(todoJSON);
*/

//loop
/*
for(let i=0;i<=10;i++){
    console.log(i);
}
*/
/*
let i=0;
while (i<=5) {
    console.log(i);
    i++;
}
*/



//Higher order Function
/*
const todos=[
    {
        id:1,
        text:'talk with trash',
        isCompleted:true
    },
    {
        id:2,
        text:'talk with boss',
        isCompleted:true
    },

]

for (todo of todos){
    console.log(todo);
}

todos.map(function(todo){
    console.log(todo );
})

todos.forEach(function(todo){
    console.log(todo);
})
todos.filter(function(todo){
    console.log(todo);
})
*/


//conditional
/*
let marks=10;
if (marks<=10){
    console.log('fail');
    
}
else{
    console.log('Pass');
}

let color='Green';
 
switch (color) {
    case red:
        console.log('color is red');
        break;

    default:
        console.log('no color');
        break;
}
*/

//Function
/*
function addition(n1,n2){
    return n1+n2;
}
let total=addition(10,10);
console.log(total);

const addition=(n1,n2)=>
console.log(n1+n2);
addition(30,40)
*/


//promises,callback,async,await

/*
//promise
//promise resovle
async function add(a,b){
    return Promise.resolve(a+b);
}
add(3,5)
.then(data=>console.log(data))
.catch(err=>console.log(err))

//promise reject

async function add(a,b){
    if(a<10)return Promise.reject('A is Small')
    return Promise.resolve(a+b)
}
add(3,5)
.then(data=>console.log(data))
.catch(err=>console.log(err))

//promise pending

async function just(){
    //promise create
    return new Promise(function(resolve,reject)){
      setTimeout(function(){
          resolve('yes I am');
      },3000)
    })
}
//promise pending
console.log(just());
just()
.then(data=>console.log('data'))
.catch(err=>console.log('err'))
*/

//async-await

/*
//resolve
async function just(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve ('Yes I am')
        },3000);
    })
}
(async function init(){
    let data =await just();
    console.log(data);
})()

//reject

async function just(){
    return new Promise(resolve,reject){
        setTimeout(() => {
            reject('Yes I am')
        }, 3000);
    }
}
(async function init(){
    try{
        let data=await just()
        console.log(data );
    }
    catch (err){
        console.log(err);

    }
})()
*/


//apply(),call(),bind()
/*
//bind
function myFunction(){
    console.log(this);
}
myFunction()
let newFunction= myFunction.bind({a:10})

newFunction();

//call
 
function myFunction(a,b){

    console.log('A is',a,'B is',b,'this is equal to',this);
}
myFunction()
myFunction.call({a:10},10,11)

//apply
function myFunction(a,b){
    console.log('A is',a,'B is',b,'this is equal to',this);
}
myFunction();
myFunction.apply({a:10},[11,12])
*/


//Constructor and Prototypes

//constructor

/*
function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);

   this.getBirthYear=function(){
       return this.dob.getFullYear();
   }

   this.getFullName=(){
       return `${this.firtstName} ${this.lastName}`
   }
}

//Institiate an object 

const person1=new Person('john','doe','1990');
const person2=new Person('Mark','joe','1902');

console.log(person1.getBirthYear());
console.log(person2.getFullName());
*/

//prototypes
/*
function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);

    Person.prototype.getFullYear=function(){
        return this.dob.getFullYear();
    }
    Person.prototype.getFullName=function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1=new Person('john','Doe','1990');

console.log(person1);
*/

//ES6 class
/*
class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }

    getFullYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1=new Person('john' ,'doe ','1980');

console.log(person1.getFullYear());
*/


//DOM


//single element
//for id 
/*
console.log(document.getElementById('my-form'));
//for class
console.log(document.querySelector('.container'));
*/
//multiple element
/*
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('.item'));
*/
// Manipulating the Dom

/*
const ul=document.querySelector('.item');
ul.remove();
ul.children[1].innerHTML=<h1>Hello World</h1>
ul.lastElementChild.innerHTML=<h2>Hello</h2>

//btn
const btn=document.querySelector('.btn');
btn.getElementsByClassName.background="red";
*/

//Events
//Mouse Events
/*
btn.addEventListener("click",e=>{
    e.preventDefault();
    console.log(e.target.className);

    document.getElementById("my-form").style.background="#ccc";

    document.querySelector("body").classList.add("bg-dark");

});
*/

//Form
/*
const myForm=document.querySelector("#my-form");
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

//listen for form submit 

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value===''||emailInput.value===''){

        //alert
        msg.classList.add("error");
        msg.innerHTML="Please enter all fields";

        //Remove error after 3 secs
        setTimeout(() =>msg.remove(),3000);
    }
    else{
        const li=document.createElement("li");
        //add text node with input values
        li.appendChild(documment.createTextNode(`${nameInput.value} ${emailInput.value}`));

        //append to ul
        userList.appendChild(li)

        //clear Fields
        nameInput.value="";
        emailInput.value="";
    }
}

*/
