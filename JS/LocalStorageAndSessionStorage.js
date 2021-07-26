//  // localStorage exists until we manually clear it out. 

// // sessionStorage exists when the browser is open and is lost once the browser is closed. 


// localStorage.setItem('name', "Sara")
// localStorage.setItem('age', "19")
// localStorage.setItem('last name', "Vijayakumar")

// localStorage.removeItem('name')

// const n = localStorage.getItem('name')

// console.log(n)

// // clears everything
// localStorage.clear();

localStorage.clear(); 

document.querySelector('form').addEventListener('submit', (e) =>{
  const task = document.getElementById('task')
  let tasks = []; 

  if(localStorage.getItem('tasks') !== null){
    tasks = JSON.parse(localStorage.getItem('tasks')); 
  }

  tasks.push(task.value)

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved')
  e.preventDefault();
})