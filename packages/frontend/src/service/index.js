import { postCreateUser, postUpdateAward, getUser } from '../api';
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

  self.getUser = async () => {
    try {
      const userId = getLocalStorage(USER.USER_ID);
      const { data } = await getUser(userId);
      return data.data;
    } catch (e) {
      console.log(e);
      alert(ERROR_MESSAGE.HTTP_REQUEST_FAILURE);
    }
  };

  self.updateAward = async awardParams => {
    try {
      const userId = getLocalStorage(USER.USER_ID);
      const { data } = await postUpdateAward(userId, awardParams);
      console.log('data', data);
      return data.data;
    } catch (e) {
      console.log(e);
      alert(ERROR_MESSAGE.HTTP_REQUEST_FAILURE);
    }
  };

  return self;
};

export default Service;
