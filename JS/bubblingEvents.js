const child = document.getElementById('box-3')
const parent = document.getElementById('box-2')
const grandParent = document.getElementById('box-1')

let childEvent = (e) => {
  console.log(e.target);
  e.preventDefault();

}
child.addEventListener('click', childEvent); 
parent.addEventListener('click', childEvent); 
grandParent.addEventListener('click', childEvent); 