const btns = document.querySelectorAll('.big-five-button');
const list = document.querySelector('.big-five-list');
const list2 = document.querySelector('.spotted-animals-list');

console.log('The buttons are:', btns);

btns.forEach(function(btn) {
btn.addEventListener('click', getBigFiveAnimal);
});

function getBigFiveAnimal(event) {
    const value = event.target.innerHTML;
    console.log(value);
    const listItem = document.createElement('li');
    listItem.innerHTML = value;
    console.log(listItem);
    list.appendChild(listItem);
    //const node = list.lastElementChild;
    //list2.appendChild(node);
    
};

//const listItem2 = document.createElement('li');
//list2.append(listItem2)


