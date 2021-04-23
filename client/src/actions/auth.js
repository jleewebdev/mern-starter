import * as api from '../api';


export const logIn = (logInData) => async (dispatch) => {
  try {
    const { data } = await api.logIn(logInData);
    localStorage.setItem('auth', JSON.stringify(data))
    dispatch({
      type: "LOG_IN",
      payload: data
    });
  } catch (error) {
    console.log(error)
  }
}

export const logOut = () => async (dispatch) => {
  localStorage.removeItem('auth');
  dispatch({
    type: "LOG_OUT"
  });
}