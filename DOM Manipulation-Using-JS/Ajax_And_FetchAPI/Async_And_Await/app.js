const button = document.querySelector('button')

// button.addEventListener('click', () =>{
// const response = fetch('https://jsonplaceholder.typicode.com/posts1')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err))

// })


// async function always returns a promise. 

async function hello(){
  return 'hello'
}

const helloPromise = hello(); 

console.log(helloPromise)

button.addEventListener('click',async () =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  const data = await response.json()

  console.log(data)
})

