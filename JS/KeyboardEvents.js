const form = document.querySelector('form')
const input = document.getElementById('task');
const heading = document.querySelector('h5')
form.setAttribute('action', 'index.php');

let formEvent = (e) => {
  console.log(e.target);
  console.log(e.type)

  console.log(input.value)
  input.value = ''
  e.preventDefault(); 
}

let keyEvent = (e) =>{
  console.log(e.type)
}

// form.addEventListener('submit', formEvent); 
// form.addEventListener('keydown', keyEvent); 
// form.addEventListener('keyup', keyEvent)
// form.addEventListener('keypress', keyEvent)

// // when you click on the input box, it's focus
// input.addEventListener('focus', keyEvent); 

// // when you click out of the input box, it's blur
// input.addEventListener('blur', keyEvent)

// // cut -> ctrl + x, copy -> ctrl + c, paste -> ctrl + v
// input.addEventListener('cut', keyEvent)
// input.addEventListener('paste', keyEvent)
// input.addEventListener('copy', keyEvent)


