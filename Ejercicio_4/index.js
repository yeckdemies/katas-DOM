/***********************************************  EJERCICIO 1  ***********************************************/
//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const button = document.createElement('button');
button.id = 'btnToClick';
button.innerText = 'Print Console Log';

button.addEventListener('click', (e) => {
  console.log(e);
});

document.body.append(button);

/***********************************************  EJERCICIO 2  ***********************************************/
//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input = document.querySelector('.focus');

input.addEventListener('focus', (e) => {
  console.log(e.target.value);
});

/***********************************************  EJERCICIO 3  ***********************************************/
//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', (e) => {
    console.log(e.target.value);
  });
}

//! 1.3
const input2 = document.querySelector('.value');
input2.addEventListener('input', (e) => console.log(e.target.value));
