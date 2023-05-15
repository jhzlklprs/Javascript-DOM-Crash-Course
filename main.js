var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form Submit Event
form.addEventListener('submit', addItem);

//Add Item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;

    //Create new li element
    const li = document.createElement('li');

    //Add Class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode('newItem'));

    itemList.appendChild(li);

}