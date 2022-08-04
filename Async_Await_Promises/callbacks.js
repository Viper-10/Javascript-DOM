// callbacks are functions that are passed to other functions as arguments
// Callbacks are run by the parent function that takes them as an argument conditionally or unconditionally

// Examples of callbacks: setTimeout(callback, time), setInterval(callback, time), event listeners takes callbacks as arguments.

// setTimeout(() => {
//   console.log("I'm a callback function. I run after 2 seconds");
// }, 2000);

// document.addEventListener("click", () =>
//   console.log("I am a callback function. I run when you click on the page")
// );

let doThisAfter3Seconds = (cb) => {
  setTimeout(() => {
    cb();
  }, 3000);
};

doThisAfter3Seconds(() => console.log("Hey I ran after 3 seconds"));
