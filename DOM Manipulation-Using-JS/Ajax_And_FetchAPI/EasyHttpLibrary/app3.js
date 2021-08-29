const http = new easyHTTP3

http.get('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data))

http.post('https://jsonplaceholder.typicode.com/posts', {title : "My Custom Post", body : "My custom post body"}).then(data => console.log(data))

http.put('https://jsonplaceholder.typicode.com/posts/1', {title : "My Custom Post", body : "My custom post body"}).then(data => console.log(data))

http.delete('https://jsonplaceholder.typicode.com/posts/1').then(data => console.log(data))
