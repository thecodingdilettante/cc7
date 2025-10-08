// Get references to the HTML elements
const myButton = document.getElementsByClassName("myButton");
const myCallToAction = document.getElementById("myCallToAction");

// Add an event listener to the button
myButton.addEventListener('click', function() {
// Update the text content of the paragraph
myCallToAction.textContent = 'Text updated after button click!';
});