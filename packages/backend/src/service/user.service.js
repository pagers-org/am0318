import { getDatabase, ref, set } from 'firebase/database';
import { generateId } from '../utils';

export const writeUserData = async nickname => {
  const userId = generateId(nickname);
  const db = getDatabase();
  console.log(db);
  const result = await set(ref(db, 'users/' + userId), {
    nickname,
    awards: [],
    sends: [],
    status: 'active',
  });

  return result;
};
