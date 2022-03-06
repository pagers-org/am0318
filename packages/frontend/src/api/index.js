import axios from 'axios';
import { BASE_URL } from '../constants';

const api = axios.create({
  baseURL: BASE_URL,
});

export const postCreateUser = nickname => {
  return api.post('/user', {
    nickname,
  });
};

export const getUser = userId => {
  return api.get(`/${userId}`);
};

// {userId, imageData: '' , template: {title: '', description:'', templated: '', stickerId:''}
export const postUpdateAward = (userId, awardParams) => {
  return api.post('/award', { userId, template: awardParams, imageData: {} });
};

export const getAwards = (userId) => {
  return api.get(`/award/${userId}`);
};
