/***********************************************  EJERCICIO 1  ***********************************************/
//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

/* const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul');

for (let i = 0; i < countries.length; i++) {
  const li = document.createElement('li');
  li.innerText = countries[i];
  ul.append(li);
}

document.body.append(ul); */

/***********************************************  EJERCICIO 2  ***********************************************/
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

/* const element = document.querySelector('.fn-remove-me');
element.remove(); */

/***********************************************  EJERCICIO 3  ***********************************************/
//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

/* const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div = document.querySelector('[data-function="printHere"');
const ul = document.createElement('ul');

for (let i = 0; i < cars.length; i++) {
  const li = document.createElement('li');
  li.innerText = cars[i];
  ul.append(li);
}
div.append(ul);
 */

/***********************************************  EJERCICIO 4  ***********************************************/
//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

/* const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
for (let i = 0; i < countries.length; i++) {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');

  h1.innerText = countries[i].title;
  img.src = countries[i].imgUrl;

  div.append(h1, img);
  document.body.append(div);
} */

/***********************************************  EJERCICIO 5  ***********************************************/
//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

/* const countries = [
  { title: 'Random title 1', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title 3', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title 4', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title 5', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
for (let i = 0; i < countries.length; i++) {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');

  h1.innerText = countries[i].title;
  img.src = countries[i].imgUrl;

  div.append(h1, img);
  document.body.append(div);
}

const button = document.createElement('button');
button.innerText = 'Eliminar';
document.body.append(button);

const divs = document.querySelectorAll('div');
const lastDiv = divs[divs.length - 1];

button.addEventListener('click', () => {
  lastDiv.remove();
}); */

/***********************************************  EJERCICIO 6  ***********************************************/
//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

/* const countries = [
  { title: 'Random title 1', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title 3', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title 4', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title 5', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (let i = 0; i < countries.length; i++) {
  const div = document.createElement('div');
  div.id = 'div' + i;
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const button = document.createElement('button');
  button.innerText = 'Eliminar';

  h1.innerText = countries[i].title;
  img.src = countries[i].imgUrl;

  div.append(h1, img, button);
  document.body.append(div);

  button.addEventListener('click', () => {
    const removeDiv = button.parentNode;
    removeDiv.parentNode.removeChild(removeDiv);
  });
} */
