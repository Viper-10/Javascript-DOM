const http = new easyHTTP();

// const posts = http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
//   if (err) {
//     console.log(err)
//   }else {
//     console.log(response)
//   }
// })

function Post(title, body) {
  this.title = title;
  this.body = body;
}

let data = new Post("Custom Title", "This is a demo post");

// http.post('https://jsonplaceholder.typicode.com/posts', data,
// function(response){
//     console.log(response)
// })

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(response){
//   console.log(response)
// })

// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(response){
//   console.log(response)
// })
