var images = ['attels1', 'attels2', 'attels3', 'attels4', 'attels5', 'attels6', 'attels7', 'attels8', 'attels9'];
var currentImage = 0;

function showImage() {
  var image = document.getElementById(images[currentImage]);
  image.style.display = 'none';
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  image = document.getElementById(images[currentImage]);
  image.style.display = 'block';
}

// Hide all images
var allImages = document.getElementsByTagName('img');
for (var i = 0; i < allImages.length; i++) {
    allImages[i].style.display = 'none';
}

// Add a button to show the images
var button = document.createElement('button');
button.innerHTML = 'Show images';
button.onclick = showImage;
document.body.appendChild(button);