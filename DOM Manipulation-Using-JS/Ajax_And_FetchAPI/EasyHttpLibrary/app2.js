const http = new EasyHttp2();

function Post(title, body) {
  this.title = title;
  this.body = body;
}

let data = new Post("Custom Title", "This is a demo post");

http
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((users) => console.log(users))
  .catch((error) => console.error(error));

http
  .post("https://jsonplaceholder.typicode.com/posts", data)
  .then((post) => console.log(post))
  .catch((error) => console.error(error));

http
  .put("https://jsonplaceholder.typicode.com/posts/2", data)
  .then((post) => console.log(post))
  .catch((error) => console.error(error));

http
  .delete("https://jsonplaceholder.typicode.com/posts/2")
  .then((successMessage) => console.log(successMessage))
  .catch((error) => console.error(error));
