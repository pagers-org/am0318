import { postCreateUser, postUpdateAward, getUser, getAwards } from '../api';
import { ERROR_MESSAGE, USER } from '../constants';
import { setLocalStorage, getLocalStorage } from '../utils';

const Service = () => {
  const self = {};

  self.signup = async nickname => {
    try {
      const { data } = await postCreateUser(nickname);
      setLocalStorage(USER.USER_ID, data.data.userId);
      setLocalStorage(USER.NICKNAME, data.data.nickname);
      return data.data;
    } catch (e) {
      console.log(e);
      alert(ERROR_MESSAGE.HTTP_REQUEST_FAILURE);
    }
  };

  self.getUser = async userId => {
    try {
      const { data } = await getUser(userId);
      return data;
    } catch (e) {
      console.log(e);
      alert(ERROR_MESSAGE.HTTP_REQUEST_FAILURE);
    }
  };

  self.updateAward = async awardParams => {
    try {
      const { data } = await postUpdateAward(awardParams);
      return data;
    } catch (e) {
      console.log(e);
      alert(ERROR_MESSAGE.HTTP_REQUEST_FAILURE);
    }
  };

  self.getAwards = async () => {
    try {
      const userId = getLocalStorage(USER.USER_ID);
      const { data } = await getAwards(userId);
      return data.awards;
    } catch (e) {
      console.log(e);
      alert(ERROR_MESSAGE.HTTP_REQUEST_FAILURE);
    }
  };

  return self;
};

export default Service;
