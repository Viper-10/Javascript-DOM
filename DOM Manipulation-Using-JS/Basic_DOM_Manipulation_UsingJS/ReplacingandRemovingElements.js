const newHeading = document.createElement('h2');

newHeading.textContent = "New heading"; 
newHeading.style.color = "red"; 

document.querySelector('#task-title').replaceWith(newHeading);

const ul = document.querySelector('.collection')

// let li = document.querySelector('.collection li:nth-child(1)')

// li = ul.querySelector('li:nth-child(1)')
ul.removeChild(li);
