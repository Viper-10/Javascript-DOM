const li = document.createElement('li')

li.className = 'collection-item'

// this works as well. 
// li.setAttribute('class', 'collection-item')

// title attribute adds tool tip 
li.setAttribute('title', 'newly added task'); 

li.appendChild(document.createTextNode('new List item'))

const link = document.createElement('a')

link.className = 'delete-item secondary-content'
link.setAttribute('href', '#')

// adding cross icon at the end 
link.innerHTML = '<i class= "fa fa-remove"></i>'

li.appendChild(link)

document.querySelector('ul.collection').appendChild(li)
console.log(link)