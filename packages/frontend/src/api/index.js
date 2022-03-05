import axios from 'axios';
import { BASE_URL } from '../constants';

const api = axios.create({
  baseURL: BASE_URL,
});

export const postCreateUser = (nickname) => {
  return api.post('/user', {
    nickname,
  });
};
