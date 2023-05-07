
//OBJECT ORIENTED PROGRAMMING METHOD
// Class
/*class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


// Instantiate object

const person1 = new Person ('Jonh', 'Doe', '4-3-1980');
const person2 = new Person ('Mary', 'Smith', '3-6-1970');

console.log(person1.getFullName());
console.log(person1);
*/


// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// const rbtn = document.querySelector('.btn');

// rbtn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.remove('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });



const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

const resetBtn = document.querySelector('.rbtn')



//Submit Button
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value == '' || emailInput.value == ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 2000);

    } else {
        
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);



        //Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }


}

//Reset Button
resetBtn.addEventListener('click', onReset);

function onReset() {
   
    while (userList.hasChildNodes()) {
      userList.removeChild(userList.firstChild);
    } 

}





