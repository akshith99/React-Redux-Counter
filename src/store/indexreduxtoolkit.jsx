import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter-slice';
import authReducer from './auth-slice';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authReducer
    }
});

export default store;

