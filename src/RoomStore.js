import { makeAutoObservable } from 'mobx';

class RoomStore {
    roomCode = '';

    constructor() {
        makeAutoObservable(this);
    }

    setRoomCode(code) {
        this.roomCode = code;
    }

    getRoomCode() {
        return this.roomCode;
    }
}

const roomStore = new RoomStore();
export default roomStore;