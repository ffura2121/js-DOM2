import { fetchImages } from './module/api.js';
import { displayImages, clearGallery, removeLastImage, reverseGallery } from './module/gallery.js';

const loadMoreButton = document.getElementById('loadMore');
const clearGalleryButton = document.getElementById('clearGallery');
const removeLastButton = document.getElementById('removeLast');
const reverseGalleryButton = document.getElementById('reverseGallery');

const imageCount = 4;

async function loadImages(count) {
  const images = await fetchImages(count);
  displayImages(images);
}

loadImages(imageCount);

loadMoreButton.addEventListener('click', () => loadImages(imageCount));
clearGalleryButton.addEventListener('click', clearGallery);
removeLastButton.addEventListener('click', removeLastImage);
reverseGalleryButton.addEventListener('click', reverseGallery);
