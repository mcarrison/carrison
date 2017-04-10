// Your Challenge:
// - Create a function named sumOfRange.
// - It accepts one parameter, called numbers, that
//   represents an array of numbers.
//

// - In your function, sum the numbers inside the array.
//   (Reminder: you'll need a variable to store the result.)
// - Return the result.


// Hint: You do not need to create a new array - you will be
// looping through the parameter, which is already coming in as
// an array.

// Someone else will be calling your function like this:
// sumOfRange([1,2,3,4,5])
// sumOfRange([-4,-5,-10,0])

// Your code:

var arraySum = 0;
function sumOfRange(numbers) {
    arraySum = numbers.reduce(function(acc, val) {
  return acc + val;
}, 0);
    return arraySum;
}


function sumOfRange(numbers) {
    var arraySum = 0;
	for(var i = 0; i < numbers.length; i++) {
       arraySum = arraySum + numbers[i];        
}
        return (arraySum); 
}