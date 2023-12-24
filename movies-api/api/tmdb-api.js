import fetch from "node-fetch";

export const getUpcomingMovies = async (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&region=GB&page=${page}`
    );

    if (!response.ok) {
      throw new Error(response.json().message);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};


export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.TMDB_KEY +
      "&language=en-US"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getTopRated = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getTrending = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&region=GB&page=${page}`
  )
    .then((response) => {
      if (!response.ok) throw new Error(response.json().message);
      return response.json();
    })
    .catch((e) => {
      throw e;
    });
};

export const getMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
     throw error
  });
};

  
export const getMovie = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(async (response) => {
    if (!response.ok) {
      throw new Error((await response.json()).message);
    }
    return response.json();
  }).catch((error) => {
    throw error;
  });
};
  
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;

    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    }).catch((error) => {
      throw error
   });
  };

//   export const getMovieReviews = async (id) => {
//     try {
//         const response = await fetch(
//             `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
//         );     
//         if (!response.ok) {
//             throw new Error('Failed to fetch reviews');
//         }
//         const json = await response.json();
//         return json.results;
//     } catch (error) {
//         console.error('Error fetching reviews:', error);
//         throw error; 
//     }
// };

export const getMovieActors = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&region=GB&page=${page}`
  ).then(async (response) => {
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }
    return response.json();
  }).catch((error) => {
    throw error;
  });
};


export const getMovieActor = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=movie_credits`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
     throw error
  });
};

export const getMovieActorImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;

  return fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  }).catch((error) => {
    throw error
 });
};