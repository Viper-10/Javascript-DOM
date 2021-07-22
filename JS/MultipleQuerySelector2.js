// // getElementsByClassName()
// const items = document.getElementsByClassName('collection-item')
// console.log(items)

// console.log(items[0])

// items[0].style.color = 'red';
// items[1].textContent = 'Hello world';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems); 

// // printing HTML Collection individually

// for(let i = 0; i < listItems.length; ++i){
//   console.log(listItems[i]);
// }

// getElementsByClassName returns a HTML Collection. 

// // array methods like forEach don't work with HTML Collection. 
// arrayItems = Array.from(listItems)

// // using array methods after converting listItems to array
// arrayItems.forEach(function(a, index){
//   console.log(a);
//   a.textContent = `Item ${index}`;
// });


// querySelectorAll returns a NodeList. Nodelist has compatibility with funcions like forEach. 
// So converting from Nodelist to array is not that necessary. 

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// Iterating with forEach in NodeList (not possible with HTML Collection). HTML Collection has to be converted to array
liOdd.forEach(function(a, index){
    a.style.background = '#ccc';
}
)

// Iterating with regular forloop possible with HTML Collection as well. 

for(let i = 0; i < liEven.length; ++i){
  liEven[i].style.background = '#f4f4f4'; 
}
