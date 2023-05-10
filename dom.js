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

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// lastChild
// console.log(itemList.lastChild); //

// lastElementChild
// console.log(itemList.lastElementChild); //
// itemList.lastElementChild.textContent = 'Hello World';

// nextSibling
// console.log(itemList.nextSibling); //
// nextElementSibling
// console.log(itemList.nextElementSibling); //

// previousSilbing
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';





// // createElement

// // Create a div
// var newDiv = document.createElement('div');

// // Add Class
// newDiv.className = 'hello';

// // Add ID
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello World');


// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

//EVENTS

// const button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//     //console.log('Button clicked');
//     // document.getElementById('header-title').textContent = 'Changed';
//     //console.log(e);


//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // const output = document.getElementById('output');
//     // output.innerHTML = '<h3>' +e.target.id+ '</h3>';

//     // console.log(e.type);

//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     //console.log(e.offsetX);
//     //console.log(e.offsetY);

//     //console.log(e.altKey);
//     //console.log(e.ctrlKey);
//     //console.log(e.shiftKey);
//}

const button = document.getElementById('button');
const box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);


//box.addEventListener('mousemove', runEvent);


const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');

function runEvent(e){
    console.log('EVENT TPYE: ' +e.type);

    // output.innerHTML = '<h3>MouseX: ' + e.offsetX+ '</h3><h3>MouseY: ' +e.offsetY + '</h3>'

    // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
}