const initialState = {
  fio: 0
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "authSuccess":
      return {
        fio: action.payload
      };
    default:
      return state;
  }
};
