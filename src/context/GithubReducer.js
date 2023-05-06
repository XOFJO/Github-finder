function GithubReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload.users, loading: false };
    case "GET_LOADING":
      return { ...state, loading: true };
    case "GET_USER":
      return { ...state, user: action.payload.user, loading: false };
    case "GET_REPOS":
      return { ...state, repos: action.payload.repos, loading: false };
    case "CLEAR":
      return { ...state, users: [] };
    default:
      return state;
  }
}
export default GithubReducer;
