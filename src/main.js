import { getImages } from './js/pixabay-api';
import {
  renderGallery,
  showError,
  simpleLightbox,
} from './js/render-functions';

const searchForm = document.querySelector('.search');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more-button');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', search);
loadMoreButton.addEventListener('click', loadMore);

let query;
let currentPage = 1;
let maxPage;
const perPage = 15;

async function search(evt) {
  evt.preventDefault();
  query = searchForm.elements.search.value.trim();
  if (!query) {
    showError('Empty input!');
    return;
  }
  currentPage = 1;
  loader.classList.remove('hidden');
  hideLoadMore();
  try {
    const data = await getImages(query, currentPage);
    if (data.totalHits) {
      loader.classList.add('hidden');
      gallery.innerHTML = renderGallery(data.hits);
      maxPage = Math.ceil(data.totalHits / perPage);
      checkLoadMoreStatus();
      simpleLightbox.refresh();
    } else {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      gallery.innerHTML = '';
    }
    searchForm.reset();
  } catch (err) {
    showError('Something went wrong!');
    gallery.innerHTML = '';
  }
}

async function loadMore() {
  hideLoadMore();
  currentPage += 1;
  loader.classList.remove('hidden');
  try {
    const data = await getImages(query, currentPage);
    loader.classList.add('hidden');
    gallery.insertAdjacentHTML('beforeend', renderGallery(data.hits));
    checkLoadMoreStatus();

    simpleLightbox.refresh();
  } catch (err) {
    showError('Something went wrong!');
  }
  scrollToItem();
}

function showLoadMore() {
  loadMoreButton.classList.remove('hidden');
}

function hideLoadMore() {
  loadMoreButton.classList.add('hidden');
}

function checkLoadMoreStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
    showError("We're sorry, but you've reached the end of search results.");
  } else {
    showLoadMore();
  }
}

function scrollToItem() {
  const height = gallery.firstElementChild.getBoundingClientRect().height;
  scrollBy({
    top: height * 2 + 24,
    behavior: 'smooth',
  });
}

// const observer = new IntersectionObserver(observerCallback);
// observer.observe(loadMoreButton);

// function observerCallback(entries) {
//   const entry = entries[0];
//   if (!entry.isIntersecting) return;
//   loadMore();
// }
