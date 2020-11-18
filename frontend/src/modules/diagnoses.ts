import diagnosesData from './diagnosesData/diagnosesData';

const diagnosesReducer = (state = diagnosesData, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default diagnosesReducer;

