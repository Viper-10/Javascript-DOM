class easyHTTP3{
  get = async (url) => {
    const response = await fetch(url)

    const data = await response.json()

    return data
  }

  post = async(url, data) =>{
    const response = await fetch(url, {
      method : "POST", 
      body : JSON.stringify(data),
      headers : {
        'Content-type' : 'application/json'
      }           
    })

    data = await response.json()

    return data
  }

  put = async(url, data) =>{
    const response = await fetch(url, {
      method : "PUT", 
      body : JSON.stringify(data), 
      headers : {
        'Content-type' : 'application/json'
      }
    })

    data = await response.json(); 
    
    return data
  }

  delete = async(url) =>{
    const response = await fetch(url, {
      method : "DELETE"
    })

    if(response.ok){
      return "SUCCESSFULLY DELETED"
    }else return "SOMETHING WENT WRONG"
  }

}