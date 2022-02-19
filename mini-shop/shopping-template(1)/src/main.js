function loadItems() {
  return fetch('./data/item-list.json')
  .then(response => response.json())
  .then(json => json.items);
}

function displayItems(items) {
  const elItems = document.querySelector('.items');
  elItems.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  const {type, color, size, sex, image} = item;
  return `
    <li class="item">
      <img src=${image} alt=${type} class="item__thumbnail">
      <span class="item__description">${sex}, ${size}</span>
    </li>
  `;
}

// main
loadItems()
  .then(items => {
    displayItems(items);
  })