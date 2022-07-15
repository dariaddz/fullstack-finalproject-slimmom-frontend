const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
const getIsPending = state => state.auth.isPending;
const getUserAvatar = state => state.auth.avatarURL;
const getIsNewUser = state => state.auth.isNewUser;
const getToken = state => state.auth.token;
const getEmail = state => state.auth.user.email;
const getIsCalculate = state => state.auth.isCalculate;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
  getIsPending,
  getUserAvatar,
  getToken,
  getIsNewUser,
  getEmail,
  getIsCalculate
};
export default authSelectors;
