import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

///////////////////////////////////////////Пермененные\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const refs = {
    gallery: document.querySelector(".gallery")
}



// /////////////////////////////////////////Шаблон и Рендер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const galleryTemplate = ({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const render = () => {
    const list = galleryItems.map((item) => galleryTemplate(item)).join('');
    
    refs.gallery.innerHTML = "";
    refs.gallery.insertAdjacentHTML("beforeend", list)
}
render()

////////////////////////////////////////////////////////////Сімпл-Лайтбокс\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});


