const form = document.querySelector('form')
const task = document.getElementById('task')
const ul = document.querySelector('ul')
const clearTasks = document.querySelector('.clear-tasks')
const filterTasks = document.getElementById('filter'); 

// localStorage.clear()
const storeInLocalStorage = task =>{
  let tasks; 
  if(localStorage.getItem('tasks') === null){
    tasks = []; 
  }

  else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task.textContent)

  localStorage.setItem('tasks', JSON.stringify(tasks))
}
const getTasksFromLocalStorage = () =>{
  if(localStorage.getItem('tasks') !== null){
    let tasks = JSON.parse(localStorage.getItem('tasks')); 

    tasks.forEach(task => {
      const li = document.createElement('li')
      li.appendChild(document.createTextNode(task))
      li.className = 'collection-item'
      const link = document.createElement('a')
      link.className = 'delete-item secondary-content'
      link.innerHTML = '<i class = "fa fa-remove"></i>'
      li.appendChild(link)
      ul.appendChild(li)
    })
  } 
}
const removeTaskFromLocalStorage = task =>{
  let tasks = JSON.parse(localStorage.getItem('tasks'))
  
  tasks.forEach((text, index) =>{
    if(text === task.textContent){
      tasks.splice(index, 1)
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}
const addTask = (e) =>{
  const taskInput =  task.value;   
  if(taskInput === ''){
    alert('add a task')
    return;
  }

  const list = document.createElement('li');
  list.className = 'collection-item'
  
  list.appendChild(document.createTextNode(taskInput))

  
  const link = document.createElement('a')
  link.className = 'delete-item secondary-content'; 
  link.innerHTML = '<i class = "fa fa-remove"> </i>'

  list.appendChild(link)
  ul.appendChild(list)

  // storing in Local storage 
  storeInLocalStorage(list)
  task.value = ''; 
  e.preventDefault();
}
const removeTask = (e) =>{
  if(e.target.classList.contains('fa-remove') && confirm('do you want to remove the task')){  
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      e.target.parentElement.parentElement.remove();    
  }
}
const clearAllTasks = (e) =>{

  if(confirm('Do you want to delete all tasks? ')){
  // This is slower than removing each li individually
  // // method 1 
  // ul.textContent = '';

  // // method 2 
  // ul.innerHTML = ''; 

  // //faster method 1 
  let tasks = document.querySelectorAll('.collection-item')

  tasks.forEach((element) =>{
    element.remove(); 
  })

  // //  faster method 2 

  // while(ul.firstChild){
  //   ul.removeChild(ul.firstChild)
  // }

  // removing tasks from local storage
  localStorage.removeItem('tasks');
  }  
}

const filterEvent = (e) =>{
  tasks = document.querySelectorAll('.collection-item')

  tasks.forEach((task) =>{
    if(task.textContent.indexOf(e.target.value) === -1){
      task.style.display = 'none'; 
    }
  })
}

loadEventListeners(); 

function loadEventListeners(){  

  document.addEventListener('DOMContentLoaded', getTasksFromLocalStorage)
  form.addEventListener('submit', addTask);
  ul.addEventListener('click', removeTask);  
  clearTasks.addEventListener('click', clearAllTasks)
  filterTasks.addEventListener('keyup', filterEvent)
}

