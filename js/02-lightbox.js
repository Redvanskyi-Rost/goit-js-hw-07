import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imageContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryList(galleryItems);

imageContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
// console.log(galleryItems);
