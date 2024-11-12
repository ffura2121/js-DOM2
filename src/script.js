const gallery = document.querySelector("#gallery");
const loadMoreBtn = document.querySelector("#loadMore");
const clearBtn = document.querySelector("#clear");
const removeLastBtn = document.querySelector("#removeLast");
const reverseBtn = document.querySelector("#reverse");
const fullscreenView = document.querySelector("#fullscreenView");
const fullscreenImage = document.querySelector("#fullscreenImage");
const closeFullscreenBtn = document.querySelector("#closeFullscreen");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let currentIndex = 0;

const loadImages = async (count = 4) => {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=${count}`);
    const images = await response.json();
    images.forEach((imgData, i) => {
      const img = document.createElement("img");
      img.src = imgData.download_url;
      img.alt = imgData.author;
      img.dataset.index = gallery.children.length;
      gallery.append(img);
    });
  } catch (error) {
    console.error("Error loading images:", error);
  }
};

gallery.addEventListener("click", (e) => {
  if (e.target.matches("img")) {
    openFullscreen(parseInt(e.target.dataset.index));
  }
});

const openFullscreen = (index) => {
  currentIndex = index;
  fullscreenImage.src = gallery.children[index].src;
  fullscreenView.style.display = "flex";
};

closeFullscreenBtn.onclick = () => fullscreenView.style.display = "none";

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % gallery.children.length;
  fullscreenImage.src = gallery.children[currentIndex].src;
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + gallery.children.length) % gallery.children.length;
  fullscreenImage.src = gallery.children[currentIndex].src;
};

clearBtn.onclick = () => {
  gallery.innerHTML = "";
  currentIndex = 0;
};

loadMoreBtn.onclick = () => loadImages(4);

removeLastBtn.onclick = () => {
  if (gallery.children.length) gallery.removeChild(gallery.lastElementChild);
};

reverseBtn.onclick = () => {
  const images = Array.from(gallery.children);
  gallery.innerHTML = "";
  images.reverse().forEach((img) => gallery.appendChild(img));
};