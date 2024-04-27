import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  const galleryMarkup = galleryItems
    .map(
      (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `
    )
    .join("");

  gallery.innerHTML = galleryMarkup;

  // Inițializarea librăriei SimpleLightbox
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt", // Folosim textul alternativ ca sugestie pentru imagine
    captionDelay: 250, // Textul alternativ apare după 250ms de la deschiderea imaginii
  });
});

console.log(galleryItems);
