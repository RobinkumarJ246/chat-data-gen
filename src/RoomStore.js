import { makeAutoObservable } from 'mobx';

class RoomStore {
  roomCode = '';
  password = '';

  constructor() {
    makeAutoObservable(this);
  }

  setRoomCode(code) {
    this.roomCode = code;
  }

  getRoomCode() {
    return this.roomCode;
  }

  setPassword(pwd) {
    this.password = pwd;
  }

  getPassword() {
    return this.password;
  }
}

export default new RoomStore();