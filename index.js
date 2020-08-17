// Write your solution here!
// Define 4 const called: append, prepend, removeLast and removeFirst, 
// and set all to an initial value of ["Milo", "Otis", "Garfield"]. 
// These are the arrays that we'll work with for each exercise.
const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

// With the .push() method, we can add elements to the end of an Array
append.push("Odie");
// We can also .unshift() elements onto the beginning of an Array:
prepend.unshift("Odie");
//The .pop() method removes the last element in an Array, destructively updating the original Array
removeLast.pop();
//The .shift() method removes the first element in an Array, also mutating the original
removeFirst.shift();