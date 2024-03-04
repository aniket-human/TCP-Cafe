document.addEventListener('DOMContentLoaded', function(event) {
    // Array with texts to type in typewriter
    var dataText = ["Best Food!", "Great Service!", "Cool Dining!"];

    // Type one text in the typewriter
    // Keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // Check if text isn't finished yet
        if (i < text.length) {
            // Add next character to the .typing-text element
            document.querySelector(".typing-text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // Wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 150);
        }
        // Text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // Call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    // Start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        // Start from the beginning if reached the end of dataText array
        i = i % dataText.length;

        // Check if dataText[i] exists
        if (i < dataText.length) {
            // Text exists! Start typewriter animation
            typeWriter(dataText[i], 0, function() {
                // After callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }

    // Start the text animation
    StartTextAnimation(0);
});

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myslides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}