import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_REVIEW } from '../actions/spot_actions'


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.author.id]: action.author });
        // case RECEIVE_SPOT:
        //     return Object.assign({}, state, action.authors);
        default:
            return state;
    }
};

export default usersReducer;