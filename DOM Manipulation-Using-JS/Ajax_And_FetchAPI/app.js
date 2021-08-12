document.getElementById('button').addEventListener('click', handleReqViaAjax)

function handleReqViaAjax(){
  const xhr = new XMLHttpRequest(); 

  // Type of request, url and async flag. 
  xhr.open('GET', 'https://google.com', true);

  // when the request is being processed. 
  // stage 3
  xhr.onprogress = function(){
    console.log(`Ready state of onprogress ${this.readyState}`)
    console.log("Processing")
  }

  // arrow function doesn't work.
  // stage 4 when the response is acquired.   
  xhr.onload = function(){
    console.log(`Ready state of onload ${this.readyState}`)
    console.log("Response acquired")

    if(this.status == 200){
      document.getElementById('output').innerHTML = 
      `<h3>${this.response}</h3>`
    }

    else if(this.status === 404){
      console.log('Requested URL not found')
    }
  }

  // runs only when an error occurs.
  // when you give url "https://google.com" this is run without enabling CORS
  
  xhr.onerror = function(){
    console.log("Something went wrong! Try Again")
  }
  xhr.send(); 
}