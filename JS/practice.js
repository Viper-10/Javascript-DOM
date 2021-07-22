// const oldHeading = document.querySelector('#task-title')

// let newHeading = document.createElement('h4')

// newHeading.textContent = "My tasks"
// newHeading.style.color = "red"; 
// newHeading.style.backgroundColor = "#f4f4f4";

// oldHeading.replaceWith(newHeading)
// console.log(oldHeading)

// const ul = document.querySelector('ul')

// console.log(ul)

// let listItems = ul.childNodes;
// listItems = ul.children;

// console.log(listItems)

// const Oddlis = document.querySelectorAll(".collection-item:nth-child(odd)")

// const Evenlis = document.querySelectorAll(".collection-item:nth-child(even)"); 

// Oddlis.forEach(function(element){
//   console.log(element.style.color = "red")
// })

// Evenlis.forEach(function(element){
//   ul.removeChild(element)
// })

// console.log(Oddlis)

// const newHeading = document.createElement('h3');

// newHeading.id = "task-title";  
// newHeading.textContent = "My content"
// newHeading.style.fontSize = "22px";
// newHeading.style.fontWeight = 800;

// document.getElementById('task-title').replaceWith(newHeading);


// const ul = document.querySelector('ul')

// const listItems = document.getElementsByClassName('collection-item');

// listItems[3].style.color = "red";

// ul.removeChild(document.querySelector('li:nth-child(4)'))

// const link = listItems[0].firstElementChild;

// let val = link.className;
// val = link.classList;
// val = link

// link.setAttribute('href', 'http://google.com');
// link.setAttribute('target', '_blank')

// console.log(val);

// let sum2 = (a, b) => a+b; 
// let isPositive2 = number => number>= 0;
// let randome2 = () => Math.floor((Math.random()*100) % 100); 

// document.addEventListener('click',(e) => console.log(e.target))

// function sum(a, b){
//   return a+b
// }

// function isPositive(number){
//   return number>=0
// }

// function randomNumber(){
//   return Math.random()
// }

// document.addEventListener('click', function(){
//   console.log('Clicked')
// })

// console.log(sum2(5, 6))
// console.log(isPositive2(-1))
// console.log(randome2())

const button = document.querySelector('.btn') 
console.log(button)
const form = document.querySelector('form')

form.setAttribute('action', '#')
button.addEventListener('click', (e)=>{
  console.log('clicked')
})