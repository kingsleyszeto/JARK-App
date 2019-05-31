const addPerson = document.forms['addPerson'];

const dishes = document.getElementById('dishes');

dishes.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

// for (i=0; i < document.forms['getUserInfo'].)
addPerson.addEventListener('submit', function(e){
    e.preventDefault();

    const name = addPerson.querySelector('input[type="text"]').value;
    // console.log(name);
    const price = addPerson.querySelector('input[type="number"]').value;
    // console.log(price);
     
    const li = document.createElement('li');

    // li.innerHTML = document.getElementById('inputFormat').innerHTML;

    const personName = document.createElement('input');
    personName.type = 'text';
    personName.placeholder = 'Name';

    const dishPrice = document.createElement('input');
    dishPrice.type = 'number';
    dishPrice.placeholder = 'Price';

    const deleteBtn = document.createElement('span');

    // personName.textContent = name;
    // dishPrice.textContent = price;
    deleteBtn.textContent = 'delete';

    deleteBtn.classList.add('delete');

    li.appendChild(personName);
    li.appendChild(dishPrice);
    li.appendChild(deleteBtn);

    dishes.appendChild(li);
});

