/**
 * UserToken helper.
 * @module helpers/UserToken
 */

import storage from 'store2';
import jwtDecode from 'jwt-decode';

const reducerName = 'user';
const localStorageTokenKey = 'authToken';

/**
 * Get session token method.
 * @method SessionToken
 * @returns {undefined}
 */
export function getUserToken() {
  return storage.get(localStorageTokenKey);
}

/**
 * Check if a token is valid
 * @return {boolean} True if the token is valid or false if expired
 */
export function isUserTokenValid(token) {
  let decodedToken;
  try {
    decodedToken = jwtDecode(token);
  } catch (err) {
    storage.remove('authToken');
    return false;
  }
  return (new Date(decodedToken.exp * 1000) > new Date());
}

/**
 * Persist userToken method.
 * @method persistUserToken
 * @param {object} store Redux store.
 * @returns {undefined}
 */
export function persistUserToken(store) {
  let currentValue = getUserToken();

  /**
   * handleChange method.
   * @method handleChange
   * @returns {undefined}
   */
  function handleChange() {
    const previousValue = currentValue;
    const state = store.getState();
    currentValue = state[reducerName].token;

    if (previousValue !== currentValue) {
      if (currentValue === null) {
        storage.remove(localStorageTokenKey);
      } else {
        storage.set(localStorageTokenKey, currentValue);
      }
    }
  }

  store.subscribe(handleChange);
  handleChange();
}
