import { combineReducers } from "redux";

const getQuestionsReducer = (state = {
    fetching: false,
    failed: false,
    error: null,
    questions: null
}, action) => {
    switch (action.type) {
        case "Get_Questions": {
            return {...state, fetching: true};
        }
        case "Receive_Questions": {
            return {...state, questions: action.payload};
        }
        case "Get_Questions_Error": {
            return {...state, fetching: false, failed: true, error: true};
        }
        default: {
            return {...state, fetching: false, failed: true };
        }
    }
}

export default combineReducers({
    getQuestions: getQuestionsReducer
});