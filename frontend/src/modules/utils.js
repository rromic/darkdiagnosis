
import config from '../config';

/* const fetchRelative = async (path, options = {}, queryParams) => {

    return {};
    const url = new URL(config.apiHost + 'v0/' + path);
    url.search = new URLSearchParams(queryParams);

    const token = localStorage.getItem('token');
    if (token) {
        if (!options.headers) {
            options.headers = {};
        }
        options.headers['X-Access-Token'] = token;
    }
    

    return await ((await fetch(url, options)).json());
}; */

const fetchRelative = async (path, options = {}, queryParams) => {

  const url = new URL('http://localhost:3000/' + path);
  url.search = new URLSearchParams(queryParams);

  /* const token = localStorage.getItem('token');
  if (token) {
      if (!options.headers) {
          options.headers = {};
      }
      options.headers['X-Access-Token'] = token;
  } */

  options.headers = {
    'accept': 'application/json',
  };

  const response = await ((await fetch(url, options)).json())

  return response;
};

export { fetchRelative };

