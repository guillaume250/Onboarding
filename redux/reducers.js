const initialState = {
  currentPath: 1,
  timeline: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === 'UPDATE_PATH') {
    return Object.assign({}, state, action.payload);
  }
  return state;
}

export default rootReducer;
