//1.1 Inserta dinamicamente en un html un div vacio con javascript.
/* const newDiv = document.createElement('div');
document.body.append(newDiv); */

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
/* const newDiv1 = document.createElement('div');
const p = document.createElement('p');

newDiv1.append(p);
document.body.append(newDiv1); */

/* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	loop con javascript. */

/* const newDiv2 = document.createElement('div');

for (let i = 0; i < 6; i++) {
  const p1 = document.createElement('p');
  newDiv2.append(p1);
}
document.body.append(newDiv2); */

/* 1.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'. */

/* const p2 = document.createElement('p');
p2.innerText = 'Soy dinámico!';

document.body.append(p2); */

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

/* const h2Wubba = document.querySelector('.fn-insert-here');
h2Wubba.innerText = 'Wubba Lubba dub dub'; */

/* 1.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array. */
/* const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

for (let i = 0; i < apps.length; i++) {
  const li = document.createElement('li');
  li.innerText = apps[i];
  ul.append(li);
}
document.body.append(ul); */

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
/* const removeElement = document.querySelectorAll('.fn-remove-me');

removeElement.forEach((element) => element.remove()); */

/* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild. */

//Forma 1

/* const divs = document.getElementsByTagName('div');
const div0 = divs[0];

const p3 = document.createElement('p');
p3.innerText = 'Voy en medio!';

div0.insertAdjacentElement('afterend', p3);

document.body.append(p); */

//Forma 2

/* const div = document.querySelector('div');

const p3 = document.createElement('p');
p3.innerText = 'Voy en medio!';

div.insertAdjacentElement('afterend', p3);

document.body.append(p); */

/* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here */

/* const classInsert = document.querySelectorAll('.fn-insert-here');

for (let i = 0; i < classInsert.length; i++) {
  const p4 = document.createElement('p');
  p4.innerText = 'Voy dentro!';
  classInsert[i].insertAdjacentElement('afterbegin', p4);
} */
