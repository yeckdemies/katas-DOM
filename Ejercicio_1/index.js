/***********************************************  EJERCICIO 1  ***********************************************/
//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const button = document.querySelector('.showme');
console.log(button);

/***********************************************  EJERCICIO 2  ***********************************************/
//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1 = document.querySelector('#pillado');
console.log(h1);

/***********************************************  EJERCICIO 3  ***********************************************/
//1.3 Usa querySelector para mostrar por consola todos los p

const p = document.querySelectorAll('p');
console.log(p);

/***********************************************  EJERCICIO 4  ***********************************************/
//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemon = document.querySelectorAll('.pokemon');
console.log(pokemon);

/***********************************************  EJERCICIO 5  ***********************************************/
//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe);

/***********************************************  EJERCICIO 6  ***********************************************/
//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const testMeAll = document.querySelectorAll('[data-function="testMe"]');

for (let i = 0; i < testMeAll.length; i++) {
  if (i == 2) {
    console.log(testMeAll[i]);
  }
}
