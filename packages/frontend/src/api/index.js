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

// { userId:userId, template: {title: '', description:'', templateId: '', stickerId:''}
export const postUpdateAward = awardParams => {
  return api.post('/award', awardParams);
};

export const getAwards = (userId) => {
  return api.get(`/award/${userId}`);
};
