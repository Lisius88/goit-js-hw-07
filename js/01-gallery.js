import { galleryItems } from './gallery-items.js';
// Change code below this line

///////////////////////////////////////////Пермененные\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const refs = {
    gallery: document.querySelector(".gallery")
}

let instance = basicLightbox.create('')

// /////////////////////////////////////////Шаблон и Рендер\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const galleryTemplate = ({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const render = () => {
    const list = galleryItems.map((item) => galleryTemplate(item)).join('');
    
    refs.gallery.innerHTML = "";
    refs.gallery.insertAdjacentHTML("beforeend", list)
}
render()

///////////////////////////////////////////////Деллегирование и собития\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const clickOnGalleryItem = (evt) => {
    evt.preventDefault()
    if (evt.target === evt.currentTarget) {
        return;
    }

    console.log("Click")
    const imageUrl = evt.target.dataset.source
    console.dir(evt.target);
    viewImg(imageUrl);
}

refs.gallery.addEventListener("click", clickOnGalleryItem)
//////////////////////////////////////Работа с модалкой\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const onEscPress = (evt) => {
     if (evt.key !== 'Escape') {
         return
     }
     closeModal() 
 }

const viewImg = (url) => {
    instance = basicLightbox.create(`
    <img src="${url}">
`)

instance.show(() => {
    window.addEventListener('keydown', onEscPress);
    })
}

const closeModal = () => {
     instance.close(() => {
      window.removeEventListener('keydown', onEscPress);
    })
}


