import axios from 'axios';

async function fetchNameMovie(id) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVlY2IwZTM1N2IwNzY4OTc3M2U3N2E2ZjY2ODNkNiIsInN1YiI6IjY1NDM2YjMwZTFhZDc5MDEyYzkxMWMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nNMftaRxeM-ZOVuw351-nkshf1rZNko2qstg9NtH3yg',
    },
  };

  try {
    const response = await axios(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export default fetchNameMovie;
