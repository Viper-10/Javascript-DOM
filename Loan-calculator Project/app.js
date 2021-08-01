const form = document.querySelector('form')

const clearError = () => {
  document.querySelector('.alert').remove(); 
}
const showError = (error) =>{
  const errorDiv = document.createElement('div')
  errorDiv.className = 'alert alert-danger'

  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')

  errorDiv.appendChild(document.createTextNode(error))

  card.insertBefore(errorDiv,heading);
  setTimeout(clearError, 3000);
}
const calculateFoo = () =>{

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  // isFinite() returns false if the argument passed is a NaN or Infinity. 

  // isFinite("123") returns true. 

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2); 
    totalPayment.value = (monthly*calculatedPayments).toFixed(2); 
    totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);

    document.getElementById('loading').style.display = 'none'
    document.getElementById('results').style.display = 'block';
  }else{
    document.getElementById('loading').style.display = 'none'
    showError("Please check your numbers")
  }
}

LoadAllEventListeners(); 


function LoadAllEventListeners(){
  form.addEventListener('submit', (e) => {

    document.getElementById('loading').style.display = 'block'; 
    setTimeout(calculateFoo, 2000); 
    e.preventDefault();
  }); 
}