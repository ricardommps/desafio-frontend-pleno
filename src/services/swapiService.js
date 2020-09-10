import axios from 'axios';

export async function films() {
  return await axios.get('api/films');
}

export async function film(id) {
  return await axios.get(`api/films/${id}`);
}

export async function peoples() {
  return await axios.get('api/people');
}

export async function people(id) {
  return await axios.get(`api/people/${id}`);
}

export async function planets() {
  return await axios.get('/api/planets/');
}

export async function planet(id) {
  const { data } = await axios.get(`api/planets/${id}`);
  return data;
}

export async function getPlanet(id) {
  return await axios.get(`api/planets/${id}`);
}

export async function searchFilm(title) {
  return await axios.get(`api/films/?search=${title}`);
}

export async function searchPeople(name) {
  return await axios.get(`api/people/?search=${name}`);
}
