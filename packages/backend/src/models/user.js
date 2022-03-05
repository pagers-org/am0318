export default class User {
  /**
   *
   * @param {string} id
   * @param {string} nickname
   * @param {Award[]} awards
   * @param {Award[]} sends
   * @param {'active'|'inactive'} status
   */
  constructor(id, nickname, awards, sends, status) {
    this.id = id;
    this.nickname = nickname;
    this.award = awards;
    this.history = sends;
    this.status = status;
  }
}
