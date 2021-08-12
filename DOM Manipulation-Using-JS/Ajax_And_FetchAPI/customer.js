document.getElementById('button1').addEventListener('click', getCustomerEvent)
document.getElementById('button2').addEventListener('click', getCustomersEvent)

function getCustomerEvent(e){
  const xhr = new XMLHttpRequest(); 

  xhr.open('GET', 'customer.json', true)

  // this.responseText is a string, so we need to parse it to json object

  xhr.onload = function(){

    
    if(this.status === 200){
      const customer = JSON.parse(this.responseText)
      const output = `
        <ul>
          <li> ID: ${customer.id} </li>
          <li> Name: ${customer.name} </li>
          <li> Company: ${customer.company} </li>
          <li> Phone: ${customer.phone} </li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output; 
      
    }
  } 

  xhr.send();
}
function getCustomersEvent(e){

  const xhr = new XMLHttpRequest(); 

  xhr.open('GET', 'customers.json', true); 

  xhr.onload = function(){
    if(this.status === 200){
      const customers = JSON.parse(this.responseText)
      let output = '';

      customers.forEach(function(element, index){
        output += `
        <ul> Customer ${index+1} 
          <li> ID: ${customer.id} </li>
          <li> Name: ${customer.name} </li>
          <li> Company: ${customer.company} </li>
          <li> Phone: ${customer.phone} </li>
        </ul>
      `;
      })
      
      document.getElementById('customers').innerHTML = output; 
     
    }
  }

  xhr.send(); 
}