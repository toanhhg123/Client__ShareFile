export const keyAuth = "KEY_AUTH_FILES";
class AuthStore {
  static setItem(data) {
    localStorage.setItem(keyAuth, JSON.stringify(data));
  }
  static getItem() {
    const dataJson = localStorage.getItem(keyAuth);
    return dataJson ? JSON.parse(dataJson) : null;
  }
  static removeStore() {
    localStorage.removeItem(keyAuth);
  }
}

export default AuthStore;
