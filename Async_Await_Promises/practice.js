// function printAfter1Second(x) {
//   setTimeout(() => {
//     console.log(x);
//     if (x < 10) printAfter1Second(x + 1);
//   }, 1000);
// }
// printAfter1Second(0);

function printAfterNSeconds(x) {
  setTimeout(() => {
    console.log(x);
  }, x * 1000);
}
for (let i = 0; i < 10; ++i) {
  printAfterNSeconds(i);
}
