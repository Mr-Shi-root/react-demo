import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';

import defaultCounterSlice from '../features/counter/counterSlice';

console.log('isTrue:', defaultCounterSlice === counterSlice, defaultCounterSlice === counterSlice.reducer);
console.log(defaultCounterSlice, defaultCounterSlice.reducer, counterSlice);

export default configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})