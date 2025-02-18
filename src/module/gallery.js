const gallery = document.getElementById('gallery');

export function displayImages(images) {
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.download_url;
    imgElement.alt = `Photo by ${image.author}`;
    gallery.appendChild(imgElement);
  });
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function removeLastImage() {
  if (gallery.lastElementChild) {
    gallery.removeChild(gallery.lastElementChild);
  }
}

export function reverseGallery() {
  const images = Array.from(gallery.children);
  gallery.innerHTML = '';
  images.reverse().forEach(img => gallery.appendChild(img));
}