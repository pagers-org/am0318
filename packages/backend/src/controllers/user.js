import initFirebase from '../config';
import 'firebase/compat/firestore';
import { generateId } from '../utils';

const firestore = initFirebase.firestore();

export const addUser = async (req, res) => {
  try {
    const { nickname } = req.body;
    const userId = generateId();
    const data = {
      nickname,
      awards: [],
      sends: [],
      status: 'active',
    };
    await firestore.collection('am0318-user').doc(userId).set(data);
    res.status(200).json({ userId, nickname });
  } catch (error) {
    res.status(403).send(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const users = await firestore.collection('am0318-user').doc(userId);
    const data = await users.get();
    if (!data.exists) {
      res.status(404).send('User with the given ID not found');
    } else {
      res.send({ ...data.data(), userId });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.query.key;
    const data = req.body;
    const student = await firestore.collection('am0318-user').doc(id);
    await student.update(data);
    res.send('User record updated successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await firestore.collection('am0318').doc(id).delete();
    res.send('Record deleted successfuly');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
