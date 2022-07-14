const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserAvatar = state => state.auth.avatarURL;
const getUsername = state => state.auth.user.name;
const getToken = state => state.auth.token;
const getIsNewUser = state => state.auth.isNewUser;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserAvatar,
  getUsername,
  getToken,
  getIsNewUser,
  getIsFetchingCurrent,
};
export default authSelectors;
