let timer = 0;
const args = (process.argv.slice(2));

// for (elements in args) {
//   console.log(args[elements]);
//   timer = args[elements] * 1000;


//   console.log(timer);
//   setTimeout(() => {
//     process.stdout.write('\x07');
//   }, timer);
// }
for (elements in args) {
  timer = args[elements] * 1000;
  let newArgs = args[elements];
  console.log(newArgs);
  console.log(typeof(+newArgs));

  if (args[elements] > 0 && !isNaN(newArgs)) {
  
  console.log(timer[elements]);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer);

} else {
  console.log("number is negative or no number entered");
}
}


