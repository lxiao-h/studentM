import cookie from 'js-cookie';

function getUserName() {
  return cookie.get('username');
}

function setCookie(username) {
  cookie.set('username', username);
}

function remove() {
  cookie.remove('username');
}

export default {
  remove,
  getUserName,
  setCookie,
};
