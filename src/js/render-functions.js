import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(imgArr) {
  return imgArr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="item">
            <a class="image-link" href ="${largeImageURL}">
                <img class="image" src="${webformatURL}" alt="${tags}">
            </a>
            <ul class="details">
                <li class="detail-item">
                    <h2 class="detail-title">Likes </h2>
                    <p class="detail-data">${likes}</p>
                </li>
                <li class="detail-item">
                    <h2 class="detail-title"> Views</h2>
                    <p class="detail-data">${views}</p>
                </li>
                <li class="detail-item">
                    <h2 class="detail-title">Comments </h2>
                    <p class="detail-data">${comments}</p>
                </li>
                <li class="detail-item">
                    <h2 class="detail-title">Downloads </h2>
                    <p class="detail-data">${downloads}</p>
                </li>
            </ul>
        </li>`;
      }
    )
    .join('');
}

export function showError(text) {
  iziToast.error({
    message: text,
    position: 'topRight',
  });
}

export const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
