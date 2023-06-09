// apiEndpoints.js
let environment = '';
let BASE_URL = '';

if (process.env.NODE_ENV === 'development') {
  environment = 'development';
  BASE_URL = 'http://localhost:8080/api'
} else {
  environment = 'production';
  BASE_URL = `${window.location.protocol}//${window.location.host}/api`;
}

console.log("env: " + environment)
console.log("base url: " + BASE_URL)

export const MOVIES_ENDPOINT = `${BASE_URL}/movies`;
export const TOP_RATED_MOVIE = `${BASE_URL}/top20`;
export const MOVIES_SEARCH_ENDPOINT = (query) => `${BASE_URL}/search?q=${query}`;
export const MOVIES_PAGINATION_ENDPOINT = (pageNumber, pageSize) => `${BASE_URL}/items?pageNumber=${pageNumber}&pageSize=${pageSize}`;
export const MOVIE_DETAILS_ENDPOINT = (movieId) => `/movies/${movieId}`;
export const SINGLE_MOVIE_DETAILS_ENDPOINT = (movieId) => `${BASE_URL}/movie/${movieId}`;
export const MOVIE_REVIEWS_ENDPOINT = (movieId) => `/movies/${movieId}/reviews`;
export const STAR_DETAILS_ENDPOINT = (starId) => `${BASE_URL}/star/${starId}`;

export const USERS_ENDPOINT = "/users";
export const USER_DETAILS_ENDPOINT = (userId) => `/users/${userId}`;
export const USER_FAVORITES_ENDPOINT = (userId) => `/users/${userId}/favorites`;

export const LOGIN_ENDPOINT = "/login";
export const LOGOUT_ENDPOINT = "/logout";
