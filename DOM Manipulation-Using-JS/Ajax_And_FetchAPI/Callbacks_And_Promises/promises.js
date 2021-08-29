posts = [
  {
    "title" : "Post 1", 
    "description" : "Content of Post 1"
  },
  
  {
    "title" : "Post 2", 
    "description" : "Content of Post 2"
  }
]
function createPost(post){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post)
        const error = false;     
        if(error){
          reject('Something went wrong'); 
        }  else{
          resolve(); 
        }
    }, 2000)
  })

}

function getPosts(){
  setTimeout(function(){
    let output = ``; 
    posts.forEach(function(post){
      output += `<ul>
        <li>${post.title}</li>
        <li>${post.description}</li>
      </ul>`
    })
    document.body.innerHTML = output
  }, 1000)
}

createPost({"title" : "Post 3", "description" : "Content of post 3"}).then(getPosts).catch(function(errorMessage){
  console.log(errorMessage)
}) 
