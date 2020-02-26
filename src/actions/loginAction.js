import axios from "axios";

export const loginAction = () => {
  return dispatch => {
    // dispatch(initial());
    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {})
      .then(res => {
        dispatch(authSuccess(res.data));
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

const authSuccess = fio => ({
  type: "authSuccess",
  payload: {
    fio: fio
  }
});

const initial = () => ({
  type: "nonauth",
  payload: {
    fio: 0
  }
});

const addTodoFailure = error => ({
  type: "login_fail",
  payload: {
    fio: 0
  }
});
