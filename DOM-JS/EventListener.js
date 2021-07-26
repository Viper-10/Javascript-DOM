const link = document.querySelector('.clear-tasks')
  
// since the href attribute is not set, it redirects to the same page, but after refreshing. so the console gets refreshed. 

// setting href to # doesn't refresh, instead stays on the same page without refreshing. so we can see the console with message.  
link.setAttribute('href','#')

link.addEventListener('click', (e) =>{

  // e.target.setAttribute('href', '#')
  // console.log('Clicked')

  let val; 

  val = e;   
  // console.log(e.altKey)
  // console.log(e.ctrlKey)
  // console.log(e.shiftKey)
  // val = e.target;

  // val = e.target.className; 
  // val = e.target.classList;
  
  val = e.type;
  val = e.timeStamp;

  // coords event relative to the window
  val = e.clientY; 
  val = e.clientX;

  // coords event relative to the target
  val = e.offsetX; 
  val = e.offsetY; 

  //coords event relative to the screen (includes the top new tab bars etc along with the browser)

  val = e.screenX; 
  val = e.screenY;

  console.log(val);
})

link.addEventListener('mouseover', (e) => {
  console.log(e.type)
})



