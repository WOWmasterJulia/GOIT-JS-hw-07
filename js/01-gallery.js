import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Розмітка елемента галереї:
/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */


// Код из Библтотеки:
// import * as basicLightbox from 'basiclightbox'
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)
// instance.show()


// Массив состоит из таких объектов:
// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },

const container = document.querySelector('.gallery');
const markup = galleryItems.map((elem) => `<li class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"/>
  </a>
</li>`);
container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onClick);

function onClick(evt) {
  // console.dir(evt);
  // запретить перезагрузку стандартной формы:
  evt.preventDefault();
  // чтобы клики мимо картинки не срабатывали:
  if (evt.target.nodeName !== "IMG") { return };
  // console.dir(evt.target);
  // библиотека:
  const instance = basicLightbox.create(`
     <img src="${evt.target.dataset.source}" width="800" height="600">
 `);
    // console.log(galleryItems)
  // Закрытие по кнопке Эскейп:
  instance.show(() => {
    document.addEventListener("keyup", ev => {
      console.dir(ev)
      if (ev.key === 'Escape') { instance.close() }
    });
})
}
 