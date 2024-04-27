import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  const galleryMarkup = galleryItems
    .map(
      (item) => `
      <li class="gallery__item">
        <a class="gallery__link" href="#">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>
    `
    )
    .join("");

  gallery.innerHTML = galleryMarkup;

  gallery.addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target.nodeName === "IMG") {
      const largeImageURL = event.target.dataset.source;

      const instance = basicLightbox.create(
        `
            <img src="${largeImageURL}" alt="${event.target.alt}">
          `,
        {
          onShow: (instance) => {
            instance.element().querySelector("img").src = largeImageURL;
          },
        }
      );

      instance.show();
    }
  });
});

console.log(galleryItems);
