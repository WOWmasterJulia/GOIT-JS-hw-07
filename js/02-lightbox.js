import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Розмітка картки галереї:

/* <li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="small-image.jpg" alt="Image description" />
    </a>
</li> */

const container = document.querySelector('.gallery');
const markup = galleryItems.map((elem) => `<li class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      alt="${elem.description}"/>
  </a>
</li>`);
container.insertAdjacentHTML('beforeend', markup.join(''));

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,

    // animationSlide:	true,
    // throttleInterval: 1000,
    
});
console.log(gallery);
// gallery.close();

  
  
  
  
  
    
