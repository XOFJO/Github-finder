import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const Git_URL = process.env.REACT_APP_GITHUB_URL;
const Git_key = process.env.REACT_APP_GITHUB_TOKEN;

export function GithubProvider({ children }) {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  async function searchUsers(text) {
    const parm = new URLSearchParams({
      q: text,
    });
    loading();
    const response = await fetch(`${Git_URL}/search/users?${parm}`, {
      headers: {
        Authorization: `token ${Git_key}`,
      },
    });
    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: {
        users: items,
        loading: false,
      },
    });
  }

  async function getUserRepos(login) {
    const parm = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    loading();
    const response = await fetch(`${Git_URL}/users/${login}/repos?${parm}`, {
      headers: {
        Authorization: `token ${Git_key}`,
      },
    });
    const data = await response.json();
    dispatch({
      type: "GET_REPOS",
      payload: {
        repos: data,
        loading: false,
      },
    });
  }

  async function getUser(login) {
    loading();
    const response = await fetch(`${Git_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${Git_key}`,
      },
    });

    if (response.status === 404) {
      window.location = "/NotFound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: {
          user: data,
          loading: false,
        },
      });
    }
  }
  function loading() {
    dispatch({ type: "GET_LOADING" });
  }

  function clear() {
    dispatch({ type: "CLEAR" });
  }

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        clear,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubContext;
