//Examine the document object //


// console.dir(document); 
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[9]);
// document.all[9].textContent = 'Hello World'; 
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GET ELEMENTBY ID //

// console.log(document.getElementById('header-title'));

//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello World'; == focus on just text
// headerTitle.innerText = 'Goodbye'; == affects style on text
// headerTitle.innerHTML = '<h3>Hello World</h3>';

// headerTitle.style.borderBottom = '2px solid';
// header.style.borderBottom = '3px solid #000';

// GET ELEMENTSBYCLASSNAME 22:54
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);

// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives Error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }


// GET ELEMENTSBYTAGNAME


// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);

// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives Error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }



// QUERYSELECTOR //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';


// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';


// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'yellow';


// QUERYSELECTORALL //

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';


// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }



var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);



// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


// childNodes
// console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
console.log(itemList.firstChild); // Stop at 8:40min

