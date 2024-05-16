// Definición del componente OtherComponent
function bodyCard() {
  let array=["apple","orange","pineaple","watermelon","banana","cherry"];

  // Crear un array de elementos <li> a partir del array original
  const listItems = array.map((item, index) => React.createElement('li', { key: index }, item));

  // Crear el elemento <ul> y agregar los elementos <li> como hijos
  const unorderedList = React.createElement('ul', null, listItems);

  // Devolver el elemento <ul> completo
  return unorderedList;
}
