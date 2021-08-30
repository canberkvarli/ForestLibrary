import { RECEIVE_LEAVES, RECEIVE_LEAF } from '../actions/leaf_actions';

const LeavesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_LEAVES:
            return Object.assign(newState, action.leaves.data);
        // case RECEIVE_USER_LEAVES:
        //     newState.user = action.leaves;
        //     return newState;
        case RECEIVE_LEAF:
            newState[action.leaf.data._id] = action.leaf.data;
            return newState;
        default:
            return state;
    }
};

export default LeavesReducer;