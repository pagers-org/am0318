import firestore from '../config';
import { generateId } from '../utils';

export const addUser = async (req, res) => {
  try {
    const { nickname } = req.body;
    const userId = generateId();
    const data = {
      nickname,
      awards: [],
      sends: [],
      status: 'active',
      created: `${new Date()}`,
    };
    await firestore.collection('am0318-user').doc(userId).set(data);
    res.status(200).json({ userId, nickname });
  } catch (error) {
    res.status(403).send(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const users = await firestore.collection('am0318-user').doc(userId);
    const data = await users.get();
    if (!data.exists) {
      res.status(404).send('User with the given ID not found');
    } else {
      res.send({ ...data.data(), userId });
    }
  } catch (error) {
    res.status(403).send(error.message);
  }
};
