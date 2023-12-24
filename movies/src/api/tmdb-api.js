export const getMovies = async (args) => {
    const [, idPart] = args.queryKey;
    const { page } = idPart;
  
    const response = await fetch(
      `http://localhost:8080/api/movies?page=${page}`, {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
    );
    return response.json();
  };

  
  export const getMovie = async (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
  
    try {
      const response = await fetch(
        `http://localhost:8080/api/movies/${id}`, {
          headers: {
            'Authorization': window.localStorage.getItem('token')
          }
        }
      );
      if (!response.ok) {
        throw new Error((await response.json()).message);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  };
  
    
    export const getGenres = async () => {
      return fetch(
        `http://localhost:8080/api/genres` ,{
          headers: {
            'Authorization': window.localStorage.getItem('token')
          }
        }
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
      }).catch((error) => {
        throw error
     });
    };
  
    
    export const getMovieImages = ({ queryKey }) => {
      const [, idPart] = queryKey;
      const { id } = idPart;
  
      return fetch(
        `http://localhost:8080/api/movies/${id}/images` ,{
          headers: {
            'Authorization': window.localStorage.getItem('token')
          }
        }
      ).then( (response) => {
        if (!response.ok) {
          throw new Error(response.json().message);
        }
        return response.json();
    
      }).catch((error) => {
        throw error
     });
    };
    
    export const getMovieReviews = (id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
      )
        .then((res) => res.json())
        .then((json) => {
          return json.results;
        });
    };
  
  export const getUpcomingMovies = (args) => {
    const [, idPart] = args.queryKey;
    const { page } = idPart;
    
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&region=GB&page=${page}` 
      ,{
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
    ).then((response) => {
      if (!response.ok) throw new Error(response.json().message);
      return response.json();
    }).catch((e) => {
      throw e
    });
  };

  export const getLatestMovies = async (args) => {
    const [, idPart] = args.queryKey;
    const { page } = idPart;
    const apiKey = process.env.REACT_APP_TMDB_KEY;
  
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=${page}&api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error((await response.json()).message);
    }
    return response.json();
  };
  
  
  export const getActors = (args) => {
    const [, idPart] = args.queryKey;
    const { page } = idPart;
  
    return fetch(
      `http://localhost:8080/api/actors?page=${page}` ,{
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    }).catch((error) => {
       throw error
    });
  };
  
  
  
  export const getActor = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
  
    return fetch(
      `http://localhost:8080/api/actors/${id}` ,{
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    }).catch((error) => {
       throw error
    });
  };
  
  export const getActorImages = ({ queryKey }) => {
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
  
  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
  };
  
  export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
  };