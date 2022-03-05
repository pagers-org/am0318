const userId = '테스터';
const awardId = '어워드 아이디';
const templateId = '템플릿 아이디';

export const db_format = {
  user: {
    [userId]: {
      nickname: '애칭 ',
      awards: ['어워드 아이디'],
      sends: ['어워드 아이디'],
      status: 'active|inactive',
    },
  },
  award: {
    [awardId]: {
      title: '수상 제목',
      content: '수상 내용',
      creation: '2022-03-05',
      template: 'template 아이디',
      reciver: { userId: 'user 아이디' },
    },
  },
  template: {
    [templateId]: {
      name: 'template 이름',
    },
  },
};
