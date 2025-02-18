export let page = 1;

export async function fetchImages(count) {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${count}`);
    const images = await response.json();
    page++; 
    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}