import firestore from '../config';
import { generateId } from '../utils';

export const addAward = async (req, res) => {
  try {
    const { userId, title, description, templateId, stickerId } = req.body;
    const awardId = generateId();
    const data = {
      title,
      description,
      templateId,
      stickerId,
      created: `${new Date()}`,
    };
    const userDoc = await firestore.collection('am0318-user').doc(userId);
    const userData = await userDoc.get();
    const user = userData.data();
    user.awards.unshift(data);
    await userDoc.set(user);
    await firestore.collection('am0318-award').doc(awardId).set(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(403).send(error.message);
  }
};

export const getAllAwards = async (req, res) => {
  try {
    const { userId } = req.params;
    const users = await firestore.collection('am0318-user').doc(userId).get();
    if (users.empty) {
      res.status(404).send('No student record found');
    } else {
      res.status(200).json(users.awards);
    }
  } catch (error) {
    res.status(403).send(error.message);
  }
};

export const getDetailAward = async (req, res) => {
  try {
    const { awardId } = req.params;
    const data = await firestore.collection('am0318-user').doc(awardId).get();
    if (!data.exists) {
      res.status(404).send('Student with the given ID not found');
    } else {
      res.status(200).json(data.data());
    }
  } catch (error) {
    res.status(403).send(error.message);
  }
};
