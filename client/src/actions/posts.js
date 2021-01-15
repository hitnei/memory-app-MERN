import * as api from "../api";

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    var res = await api.fetchPosts();
    var data = res ? res.data : [];
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
