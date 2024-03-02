const { loggedIn } = require('./login.js');

function cart() {
    alert('Item Added to Cart')
    var button = document.getElementById('test')
    var addedText = document.getElementById('added')

    button.disabled = true
    button.style.cursor = 'auto'

    
}

function signUp() {
    var valueInput = document.getElementById('signUpInput').value
    var valueLength = valueInput.length

    if (valueInput.slice(valueLength - 4,valueLength) !== '.com'){
      if (valueInput.slice(valueLength - 6,valueLength) !== '.co.uk'){
        alert('Invalid email.')
      } else {
        alert('Thank you for signing up!')
        document.getElementById('signUpInput').value = ''        
      }
    } else {
        alert('Thank you for signing up!')
        document.getElementById('signUpInput').value = ''
    }

}

function popUp() {
      // Get the elements by their ID
  var popupLink = document.getElementById("popup-link");
  var popupWindow = document.getElementById("popup-window");
  var closeButton = document.getElementById("close-button");
  // Show the pop-up window when the link is clicked
  popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
  });
  // Hide the pop-up window when the close button is clicked
  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
  });
}


// 
// 
// 
// 
// 
// Login Page //


