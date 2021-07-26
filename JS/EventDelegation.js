const deleteItem = (e) => {
  e.target.parentElement.parentElement.remove();
}

/* Without Event Delegation */ 
const lists = document.querySelectorAll('li');

lists.forEach(function(list){
  list.firstElementChild.addEventListener('click', deleteItem); 
})

/* 

  With Event Delegation 

  We usually delegate a single event to different elements, for each we can set up a conditional separately. 
  
  Even if elements are added dynamically this will work, since we're checking for the class name. 
*/

let delegatedClickFunction = (e) => {
  if(e.target.classList.contains('fa-remove')){
    deleteItem(e);
  }
}

document.body.addEventListener('click', delegatedClickFunction);
