// Main
loadItems()
  .then(items => {
    console.log(items);
    displayItems(items);
    setEventListeners(items);
  });

// Fetch the items form the JSON file
function loadItems() {
  return fetch('./data/item-list.json')
  .then(response => response.json())
  .then(json => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// create HTML list item form the given data item
function createHTMLString(item) {
  const {type, gender, size, color, image} = item;
  return `
    <li class="item">
      <img src=${image} alt=${type} class="item__thumbnail">
      <span class="item__description">${gender}, ${size}</span>
    </li>
  `;
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons'); // 이벤트 위임

  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

function onButtonClick(event, items) {
  const {key, value} = event.target.dataset;

  if(key == null || value == null) return;

  displayItems(items.filter(item => item[key] === value));
}