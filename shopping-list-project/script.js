// Property on the 'Window' interface that allows us to access a storage object
// Data is stored in the browser
// Data is stored as key/value pairs and values are strings(Can not store objects)

// localStorage.setItem('name','Brad'); Sets value with a key
// localStorage.getItem('name');        Get value using the key
// localStorage.removeItem('name');     Remove item using the key
// localStorage.clear();                Clear all values

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

// Event Listeners
itemForm.addEventListener('submit', addItem);