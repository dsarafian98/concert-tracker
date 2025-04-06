import axios from 'axios';
import {useCallback, useContext, useEffect, useState} from 'react';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/users/',
  timeout: 10000,
  proxy: false,
});

apiClient.defaults.headers.common = {
  'Content-Type': 'application/json',
};

const getUser = username => {
  try {
    // Simulate an API call
    return apiClient.get('/getUserInfo', {
      params: {username: username},
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
//}

export {getUser};
