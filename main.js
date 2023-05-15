var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');



// Form Submit Event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter Event
filter.addEventListener('keyup', filterItems);

//Add Item
function addItem(e){
    e.preventDefault();


    //Get input value
    let newItem = document.getElementById('item').value;

    

    //Create new li element
    const li = document.createElement('li');

    //Add Class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = ' btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete this item?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Filter items
function filterItems(e){
    // convert text to lower case
    var text = e.target.value.toLowerCase();

    // get Li's
    var items = itemList.getElementsByTagName('li');
    
    //Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }

    });


}