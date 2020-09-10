import axios from 'axios';

const setupAxiosInterceptors = (reset, token) => {
  const onResponseFailure = error => {
    const status = error.status || error.response.status;
    if (status === 403 || status === 401) {
      reset();
    }
    return Promise.reject(error);
  };
  axios.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  });
  axios.interceptors.response.use(response => response, onResponseFailure);
};

export default setupAxiosInterceptors;
