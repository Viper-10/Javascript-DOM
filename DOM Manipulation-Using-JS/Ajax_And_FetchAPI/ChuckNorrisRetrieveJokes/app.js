const numberOfJokesInput = document.querySelector('input[type = number]')
const form = document.querySelector('form')
const btn = document.querySel ector('input[type = submit]')
const jokesDisplay = document.querySelector('#jokes')

btn.addEventListener('click', retrieveAllJokes);

document.querySelector('body').addEventListener('mouseover', bgColor)

function bgColor(e){
  const x = Math.floor(Math.random() * 255); 
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${x})`
}
function retrieveAllJokes(e){
  let numberOfJokes = numberOfJokesInput.value
  
  numberOfJokes = parseInt(numberOfJokes)

  if(isNaN(numberOfJokes)){
    alert('Enter a number and submit')
    return; 
  }

  const xhr = new XMLHttpRequest(); 

  xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true); 

  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText)

      const allJokes = response.value
      let output = ``; 

      if(response.type !== "success"){
        console.log("req error")
        return
      }

      form.style.display = 'none'; 
      output += `<h4 style = "text-align : center">All Jokes</h4>`

      allJokes.forEach(function(element, index){
        output += `
        <ul class = "jokes"> Joke ${index+1} 
          <li> ID: ${element.joke} </li>
        </ul>
      `;
      })
      
      jokesDisplay.innerHTML = output
    }
  } 

  xhr.send(); 

  e.preventDefault()
}

