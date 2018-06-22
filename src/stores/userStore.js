import { decorate, observable, action } from 'mobx';

class UserStore {
  users = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  setUsers = users => {
    this.users = users;
  }
}

decorate(UserStore, {
  users: observable,
  setUsers: action
});

export default UserStore;