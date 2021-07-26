const cleartask = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
cleartask.setAttribute('href', '#')
const heading = document.querySelector('#task-title')
console.log(card)

let mouseEvent = (e) => {
  console.log(`Event Type : ${e.type}`)

  console.log(`Event target : ${e.target}`)
  // heading.textContent = `${e.offsetX} ${e.offsetY}`

  // document.body.style.backgroundColor =  `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX})`;
}

// // cleartask events 

// cleartask.addEventListener('click', mouseEvent);
// cleartask.addEventListener('dblclick', mouseEvent);
// cleartask.addEventListener('mouseover', mouseEvent);
// cleartask.addEventListener('mousedown',mouseEvent)
// cleartask.addEventListener('mouseup',mouseEvent)
// cleartask.addEventListener('mouse',mouseEvent)


// // card events

// // Mouseenter and mouseleave are fired only once when cursor enters the target element. 

// // Mouseover and mouseout are fired everytime cursor enters a new element inside our target element as well as when we enter the target element. 

// // Target of mouseover and mouseout depends on the element the cursor is pointing to inside the card element. 

// // target of mouseenter and mouseleave is always card element. 

// card.addEventListener('mouseenter', mouseEvent);
// card.addEventListener('mouseleave', mouseEvent);
// card.addEventListener('mouseover', mouseEvent);
// card.addEventListener('mouseout', mouseEvent);

// Target element is the element on which the event is happening inside card or card itself. 

// card.addEventListener('mousemove', mouseEvent); 
