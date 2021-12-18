//arrays
//const firstArr = [1,2,3];//los array y objetos dan falso, porque son independiente aunque tenga el mismo contenido

// const myFavoriteHero="Hulk";
// const x =50;
// const h=5;
// const y =10;
// const z= h + y;
// //ejercicios
// let charater ={name:"jack sparrow",age:10};
// charater={name:"jack sparrow", age:25};
// const firstName="jon ";
// const lastName= "snow ";
// const age=24;
// console.log("Soy " + firstName + lastName + "tengo " + age + " y Me gustan los Lobos");

// let a =10;
// let b=5;
// console.log(a*b);

// let c =10;
// let d=2;
// console.log(c / d);

// const numberOne=15;
// const numberTow=9;
// let sumatotal=numberOne / numberTow;
// console.log(sumatotal);

// const y=10;
// const z=5;
// let result=y + z;
// console.log(result);

// const y=10;
// const z=5;
// let x = y + z;
// console.log(x);
// x= y*z;
// console.log(x);

//objetos se asigna con :
// const myAvenger= {
//     name:'Capitan America',
//     power:80,
//     creator:'Stan Lee',
// }
// console.log(myAvenger);

// const otherAvenger = new Object();
// otherAvenger.name= "Hulk";
// otherAvenger.power=100;
// otherAvenger.creator='stan lee';
// console.log(myAvenger.name);

// //array 

// const avenger =['Hulk','Capitan America','Spiderman'];
// console.log(avenger.length);
// //metos que modifican array pop shift quitan elementos pop el ultimo y shift el primero

// //push agrega un elemento
// //reverse invierte los elementos del array
// //sort ordena los array
// //splice 
//  const months=['Ene','Mars','Abril','Jun']
//  months.splice(1,0,"Feb");
//  console.log(months);


//ejercicio Object
// const toy1 ={
//     name:'Rallo mcKing', 
//     price:29};
//     const toy2 ={
//         name:'Buss myYear',
//         price:19
//     };
//     let total = toy1.price + toy2.price;
//     console.log(total);

//     //ejercicio 2

//     let globalBasePrice =10000;
//     let car1 ={
//         name:'BMW m&m',
//         basePrice:50000,
//         finalPrice:60000 
//     };
//     let car2 ={
//         name: 'Chevrolet',
//         basePrice:70000,
//         finalPrice:80000
//     };

//     globalBasePrice=25000;
    
//     car1.finalPrice=(car1.basePrice + globalBasePrice);
//     car2.finalPrice=(car2.basePrice + globalBasePrice);
//     console.log(car1);
//     console.log(car2);
//ejercicios array
// const avengers=['Hulk','Spiderman','Black Panther'];
// //ejerc1.2
// avengers.splice(0,1,'Iroman');
// console.log(avengers[0]);

// //ejercicio 1.3
// console.log(avengers.length);

// //ejercicio1.4

// rickAndMortty.push('Morty');
// rickAndMortty.push('Summer');
// console.log(rickAndMortty[4])

// //ejerc 1.5
// rickAndMortty.push('lapiz lopez');
// rickAndMortty.pop();
// console.log(rickAndMortty);
// console.log(rickAndMortty[0]);
// console.log(rickAndMortty[4]);

//metodos que no modifican el array
//concat

//functions:
function suma(a,b){
    console.log(a+b);
    return a +b;
}
suma(15,6);

function arithm(a,b){
    if (a > b){
        console.log(a + b);
    }else if (a===b){
        console.log("Ingresa dos numeros diferentes");
    }else {
        console.log(a*b);
    }
} 
arithm(1,3);


//ejercicio function
const number1 =10;
const number2=20;
const number3 =2;
function evaluacion(){
    if (number1 ===10){
        console.log("Number1 es estrictamente igual a 10");
    }else if (number2/number1===2){
        console.log("El resultado es igual a 2");
    }else {
        console.log("Fallo");
    }
}
evaluacion();