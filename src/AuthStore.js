import { makeAutoObservable } from 'mobx';

class AuthStore {
  isLoggedIn = false;
  user = null; // Stores user details

  constructor() {
    makeAutoObservable(this);
  }

  login() {
    // Perform login logic here
    this.isLoggedIn = true;
  }

  logout() {
    // Perform logout logic here
    this.isLoggedIn = false;
    this.user = null; // Clear user details on logout
  }

  setUserDetails(userDetails) {
    this.user = userDetails;
  }
}

const authStore = new AuthStore();
export default authStore;