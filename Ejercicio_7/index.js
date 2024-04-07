//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor'];

const content = document.querySelector('[data-function="printHere"]');
const ul = document.createElement('ul');

places.forEach((element) => {
  const li = document.createElement('li');
  li.innerText = element;

  ul.append(li);
});

content.append(ul);
