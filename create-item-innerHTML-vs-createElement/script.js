// Quick & Dirty
function createListItem(item) {
  const li = document.createElement('li'); // Relying on the creation of strings for paramaters will not suffice
                                           // Must create 'Node', use createElement method

  li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;

  document.querySelector('.items').appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');
createNewItem('Cheese');

// 'appendChild' method is more efficient, doesn't force browser to create and reparse nodes and elements.