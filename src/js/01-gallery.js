import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryContainerItems = createGalleryContainerItems(galleryItems);

function createGalleryContainerItems(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `<ul class="gallery">
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </ul>`;
    })
    .join("");
};

galleryContainer.insertAdjacentHTML("beforeend", galleryContainerItems);

const lightbox = new SimpleLightbox(".gallery a", {
    scrollZoom: false,
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
  });