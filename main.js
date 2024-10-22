// 1. Funciones flecha

/*Convierte la siguiente función en una función flecha:
function saludar() {
  return "Hola";
}*/

const saludar = () => {
    return "Hola"
}

/*Convierte la siguiente función en una función flecha en línea:
function division(a,b) {
  return a / b;
}*/

const division = (a,b) => a/b

/*Convierte la siguiente función en una función flecha:
function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;
}*/

const miNombre = (nombre) => {
   return `Mi nombre es ${nombre}`
}

/*Convierte las siguientes funciones en funciones flecha:
function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
}*/

const test2 = () => {
    console.log("Función test 2 ejecutada.");
  };
  
  const test1 = (callback) => {
    callback();
  };

/*const test1 = (test2) =>{
    return "Función 2 está ejecutada"
}  SE PUEDE HACER ESTO?*/



//2. Foreach

/*Utiliza la siguiente array para resolver los próximos ejercicios:*/
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];
    

//Crea un array con la gente mayor de 25 años y muéstralo por consola.

let mayor25 = []
gente.forEach(joven =>{
    if(joven.edad>25){
        mayor25.push(joven)
    }
})
console.log(mayor25)

//Crea un array con la gente que empieza por J.

let letraJ = []

gente.forEach(persona =>{
  if(persona.nombre[0] === "J"){
    letraJ.push(persona)
  }
})
console.log(letraJ)

//3. Map

//Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

/*const genteMayor25 = gente.map(chavalx =>{
  if(chavalx.edad>25){
    return chavalx.nombre
  }
})
console.log(genteMayor25())*/ //ERRRRROR

//Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:*/
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

/*const elevadoASiMismo = numbers.map(numero)=> Math.pow(numbers){
  return numero
}*/ //ERRORRRRRR


//4. Filter

//Crea un segundo array que devuelva los impares
 const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const impares = numbers2.filter(numero => numero%2 !== 0)
 console.log(impares)
//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
 const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ];
      /* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]
      */

         const platosVeganos = foodList.filter(plato => plato.isVeggie)
  .map(plato => `Que rico ${plato.name} me voy a comer!`);
console.log(platosVeganos);


//5. Reduce
//Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600

const multiplicación = numeros.reduce((a,b)=> a*b)
console.log(multiplicación)





