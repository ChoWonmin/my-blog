import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAcwcEVKVf-rMGHNDsagWwVNkCbuZYKWRs',
  authDomain: 'myblog-51443.firebaseapp.com',
  databaseURL: 'https://myblog-51443.firebaseio.com',
  projectId: 'myblog-51443',
  storageBucket: 'myblog-51443.appspot.com',
  messagingSenderId: '472889798127',
};
firebase.initializeApp(config);

const resources = {
  provider: new firebase.auth.GoogleAuthProvider(),
  database: firebase.database(),
  storage: firebase.storage(),
};

const user = {
  id: '',
  display: '',
};

const dataModule = {
  async set(path, obj) {
    resources.database.ref(path).set(obj);
  },
  async getRef() {
    return resources.database.ref();
  },
  async get(path) {
    const ret = resources.database.ref(path).once('value');
    return ret;
  },
  async addOnChange(path, callback) {
    (await resources.database.ref(path).on('child_added', (data) => {
      callback(data);
    }));
  },
};

const storageModule = {
  async getRef(path) {
    return resources.storage.ref().child(path);
  },
  async put(ref, file) {
    try {
      ref.put(file);
    } catch (e) {
      console.error(e);
    }
  },
  async putString(ref, str) {
    try {
      ref.putString(str);
    } catch (e) {
      console.error(e);
    }
  },
};

const authModule = {
  /**
   * @returns {Promise<{id: string, display: string}>}
   */
  async signIn() {
    try {
      const u = await firebase.auth().signInWithPopup(resources.provider);
      user.id = u.user.email.split('@')[0];
      user.display = u.user.displayName;
      const data = (await dataModule.get(`/user/${user.id}`)).val();
      if (data == null) {
        await dataModule.set(`/user/${user.id}`, user);
      }
    } catch (e) {
      console.error(e);
    }
    return user;
  },
  signOut() {
  },
};

export { authModule, dataModule, storageModule };
