const initialState = {
  users: [],
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload.users };
    case "GET_USER":
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};

export default userReducer;
