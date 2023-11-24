async function getData() {
  try {
  const response = await fetch('data.json');
  if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data)
  return data;
  } catch (error) {
  console.error('Error:', error);
  }

 }
 
 async function displayTodos() {
  const data = await getData();
  let todosDiv = document.getElementById('todos');
 
  let table = document.createElement('table');
  table.className = 'table m-5 ';
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');
 
  // Crear las cabeceras
  let headerRow = document.createElement('tr');
  ['Título', 'Prioridad', 'Hecho'].forEach(header => {
  let headerCell = document.createElement('th');
  headerCell.textContent = header;
  headerRow.appendChild(headerCell);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
 
  // Crear las filas para los 'Todos'
  data.results.forEach(item => {
  let row = document.createElement('tr');
 
  // Crear las celdas para los 'Todos'
  Object.values(item).forEach(value => {
  let cell = document.createElement('td');
  cell.textContent = value;
  row.appendChild(cell);
  });
 
  // Colorear las celdas basándose en si el 'Todo' está hecho o no
  if (item.isDone) {
  row.style.backgroundColor = 'green';
  } else {
  row.style.backgroundColor = 'red';
  }
 
  tbody.appendChild(row);
  });
 
  table.appendChild(tbody);
  todosDiv.appendChild(table);
 
 }
 
 displayTodos();

 