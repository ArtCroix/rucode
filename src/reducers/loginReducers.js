export default (state, action) => {
  switch (action.type) {
    case "is_login":
      return {
        is_login: action.payload
      };
    default:
      return state;
  }
};
