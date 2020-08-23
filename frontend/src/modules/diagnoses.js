
const diagnosesReducer = (state = [], action) => {
  switch (action.type) {
    case 'diagnosesData/loaded':
      return action.data;
    default:
      return state;
  }
};

export default diagnosesReducer;

