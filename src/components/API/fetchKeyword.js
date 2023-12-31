import axios from 'axios';

async function fetchKeyword(query) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVlY2IwZTM1N2IwNzY4OTc3M2U3N2E2ZjY2ODNkNiIsInN1YiI6IjY1NDM2YjMwZTFhZDc5MDEyYzkxMWMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nNMftaRxeM-ZOVuw351-nkshf1rZNko2qstg9NtH3yg',
    },
  };

  try {
    const response = await axios(options);
    return response;
  } catch (error) {}
}

export default fetchKeyword;
