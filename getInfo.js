const addPerson = document.forms['addPerson'];

const dishes = document.querySelector('#dishes ul');

// for (i=0; i < document.forms['getUserInfo'].)
addPerson.addEventListener('submit', function(e){
    e.preventDefault();

    const name = addPerson.querySelector('input[type="text"]').value;
    // console.log(name);
    const price = addPerson.querySelector('input[type="number"]').value;
    // console.log(price);
     
    const li = document.createElement('li');

    const personName = document.createElement('span');
    const dishPrice = document.createElement('span');
    const deleteBtn = document.createElement('span');

    personName.textContent = name;
    dishPrice.textContent = price;
    deleteBtn.textContent = 'delete';

    li.appendChild(personName);
    li.appendChild(dishPrice);
    li.appendChild(deleteBtn);

    dishes.appendChild(li);
});

