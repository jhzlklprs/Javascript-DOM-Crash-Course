var form = document.getElementById('addForm');
var itemList = document.querySelector('items');

// Form Submit Event
form.addEventListener('submit', addItem);

//Add Item
function addItem(e){
    e.preventDefault();

    //Get input value
    let newItem = document.getElementById('item');

    //Create new li element
    let li = document.createElement('li');
    //Add Class
    li.className = 'list-group-item';
    console.log(li);
}