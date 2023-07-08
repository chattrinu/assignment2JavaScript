// declare variable
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var slideButton = document.getElementById('slideButton');
var imageCaption = document.getElementById('imageCaption');
var currentIndex = 0;
var slideInterval;
// Messages for each slide
var slideMessages = [
    "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany",
    "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany",
    "Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany",
    "Sentmaring Park, Münster, North Rhine-Westphalia, Germany",
    "Market in Münster, North Rhine-Westphalia, Germany"
  ];
 // Update the displayed image and caption when a thumbnail is clicked 
function updateDisplayedImage(value) {
    displayedImage.setAttribute('src',value);
}
thumbBar.addEventListener('click',function(event) {
    if (event.target && event.target.nodeName ==='IMG') {
        var imgSrc = event.target.getAttribute('src');
        var imgIndex = Array.from(thumbBar.children).indexOf(event.target.parentNode);
        imageCaption.textContent = slideMessages[imgIndex];
        updateDisplayedImage(imgSrc);

    }
});
// Start the automatic slideshow
function startSlide() {
    slideInterval = setInterval(function() {
      currentIndex = (currentIndex + 1) % thumbBar.children.length;
      var imgSrc = thumbBar.children[currentIndex].querySelector('img').getAttribute('src');
      var imgIndex = Array.from(thumbBar.children).indexOf(thumbBar.children[currentIndex]);
      imageCaption.textContent = slideMessages[imgIndex];
      updateDisplayedImage(imgSrc);
     
    }, 2000); // Change the interval time (in milliseconds) to your desired duration
  }
 // Stop the automatic slideshow 
  function stopSlide() {
    clearInterval(slideInterval);
  }
  // Toggle the slideshow when the button is clicked
  slideButton.addEventListener('click', function() {
    if (slideButton.textContent === 'Start Display') {
      startSlide();
      slideButton.textContent = 'Stop';
    } else {
      stopSlide();
      slideButton.textContent = 'Start Display';
    }
  });