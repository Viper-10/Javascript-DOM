function easyHTTP(){
  this.http = new XMLHttpRequest(); 
}

// make a HTTP GET request
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true)

  this.http.onload = function(){
    // inside this function this refers to the XMLHttpRequestObject. 

    // it has status and responsetext as attributes. 

    if(this.status === 200){
      callback(null, this.responseText)
    }else{
      callback(`Error : ${this.status}`, null)
    }
  }

  this.http.send(); 
}
// make a HTTP POST request 
easyHTTP.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true)

  this.http.setRequestHeader('Content-type', 'application/json')

  this.http.onload = function(){
    callback(this.responseText)
  }

  this.http.send(JSON.stringify(data));
}
// make a HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true)

  this.http.onload = function(){
    callback(this.responseText)
  }

  this.http.setRequestHeader('Content-type', 'application/json')

  this.http.send(JSON.stringify(data))
}

// make a HTTP DELETE request 
easyHTTP.prototype.delete = function(url, callback){
  this.http.open('DELETE', url, true)

  this.http.onload = function(){
    console.log('POST DELETED')
  }

  this.http.send() 
}