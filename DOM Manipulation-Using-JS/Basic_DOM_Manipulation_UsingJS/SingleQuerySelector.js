// let val; 
// val = document;

// val = document.all;
// val = document.all.length; 

// val = document.head; 
// val = document.doctype; 
// val = document.URL; 
// val = document.forms[0].method;

// val = document.links;
// val = document.links[0];


// val = document.scripts[0].src;
// val = document.scripts;

// console.log(val); 


// document.getElementById()

const taskTitle =  document.getElementById('task-title')

console.log(taskTitle.id)
console.log(taskTitle)

// taskTitle.style.background = '#333'
// taskTitle.style.color = '#fff'

taskTitle.textContent = 'Task List'
taskTitle.innerText = 'My tasks' // same as textContent in the context used, so heading will change to 'My tasks'


taskTitle.innerHTML = '<span style = "color:red">Task List</span>'

//using querySelector
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('#task-title'))


document.querySelector('ul').style.color = 'blue'; 
document.querySelector('li').style.color = 'red'; 
document.querySelector('ul li').style.color = 'red';
document.querySelector('ul li:last-child').style.color = 'black';
document.querySelector('ul li:nth-child(3)').style.color = 'yellow'; 

document.querySelector('ul li:nth-child(odd)').textContent = 'hello world'
document.querySelector('ul li:nth-child(even)').textContent = 'hello world'