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