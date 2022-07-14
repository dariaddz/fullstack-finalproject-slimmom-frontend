const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const getIsPending = state => state.auth.isPending;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
  getIsPending,
};
export default authSelectors;
