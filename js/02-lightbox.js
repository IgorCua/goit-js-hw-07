import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

document.querySelector('.gallery').insertAdjacentHTML('afterbegin', markup());

function markup(){
    return galleryItems.map((element) =>{
        const {preview, original, description} = element;

        return `<li class="gallery__item"
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                            title="${description}"
                        />
                    </a>
                </li>`
    }).join('');
}

document.querySelector('.gallery').addEventListener('click', test);

function test(event){
    event.preventDefault();

    if(event.target.className !== 'gallery__image') {
        return;
    }
    console.log(event.target)

    var lightbox = new SimpleLightbox('.gallery li', {
        captionSelector: 'img',
        captionDelay: 250
    });
}
