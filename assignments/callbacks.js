// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// getLength passes the length of the array into the callback.
function getLength(items, cb) {
  return cb (items.length);
}

getLength (items, function (length) {
    console.log(length)
});


// last passes the last item of the array into the callback.
function last(items, cb) {
  return cb (items.length -1);
}

function string (convert) {
  return items[3].toString();
}

last (items, function (lastOne){
    console.log (string());
});



// sumNums adds two numbers (x, y) and passes the result to the callback.
let x = 10;
let y = 5;

function sumNums(x, y, cb) {
    return cb (x + y);
}

sumNums (x, y, function (sum){
    console.log (sum);
});



 // multiplyNums multiplies two numbers and passes the result to the callback.
 let x = 10;
 let y = 5;
 
 function multiplyNums(x, y, cb) {
     return cb (x * y);
 }
 
 multiplyNums (x, y, function (multiply){
     console.log (multiply);
 });


// contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
function contains (items, cb) {
    return cb (items.includes("cherry"));
}

contains (items, function (include){
    if (include) {
  console.log ("it does")
}
else {
  console.log ("it does not")
}
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
