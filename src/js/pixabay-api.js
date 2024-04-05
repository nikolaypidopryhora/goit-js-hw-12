import axios from 'axios';

export async function getImages(query, currentPage) {
  const BASE_URL = 'https://pixabay.com';
  const API_KEY = '6515730-7e532fca90fe4fa55f1852c4d';
  const END_POINT = '/api';
  const url = `${BASE_URL}${END_POINT}?`;

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  };

  const res = await axios.get(url, { params });
  return res.data;
}
