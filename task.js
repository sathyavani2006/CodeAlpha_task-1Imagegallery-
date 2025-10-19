let currentIndex = 0;
let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

function openLightbox(element) {
  lightbox.style.display = "block";
  lightboxImg.src = element.src;
  currentIndex = Array.from(images).indexOf(element);
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  lightboxImg.src = images[currentIndex].src;
}

function filterImages(category) {
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}



