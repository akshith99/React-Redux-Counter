import { combineReducers, createStore } from 'redux';

const initialState = { counter: 0, showCounter: true, disabled: false };

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'increment': return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
            disabled: state.disabled
        }
        case 'increase': return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
            disabled: state.disabled
        }
        case 'decrement': return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
            disabled: state.disabled
        }
        case 'toggle': return {
            showCounter: !state.showCounter,
            disabled: !state.disabled,
            counter: state.counter
        }
        default: return state
    }

    // if (action.type === 'increment') {
    //     return {
    //         counter: state.counter + 1,
    //         showCounter: state.showCounter,
    //         disabled: state.disabled
    //     };
    // }
    // if (action.type === 'increase') {
    //     return {
    //         counter: state.counter + action.amount,
    //         showCounter: state.showCounter,
    //         disabled: state.disabled
    //     };
    // }
    // if (action.type === 'decrement') {
    //     return {
    //         counter: state.counter - 1,
    //         showCounter: state.showCounter,
    //         disabled: state.disabled
    //     };
    // }
    // if (action.type === 'toggle') {
    //     return {
    //         showCounter: !state.showCounter,
    //         disabled: !state.disabled,
    //         counter: state.counter
    //     };
    // }
    // return state;

}
const rootReducer = combineReducers({
    counter: counterReducer
});

const store = createStore(rootReducer);

export default store;

