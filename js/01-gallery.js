import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


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

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`)
console.log(instance);
instance.show()

// {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
//     description: 'Hokkaido Flower',
//   },

const container = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</li>`);
container.insertAdjacentHTML('beforeend', markup.join(''));
container.addEventListener('click', onClick);

function onClick(evt) {
    console.log(evt.target);
    const { target } = evt;
    if (!evt.target.classList.contains("galery__image")) {
        return;
    }
    console.log(evt.target);
    const galleryItems = target.dataset.galeryImage ?? evt.target.closest('.gallery').dataset.galleryItems;
    const currentItem = gallery.find(({ preview }) => preview === ("src"));
    console.log(currentItem);

const instance = basicLightbox.create(`
     <img src="${galleryItems.original}" width="800" height="600">
 `)
    console.log(galleryItems)
 }