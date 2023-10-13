import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';

/**
 * 相比于 redux ，reduxjs/toolkit 的好处？ 
 * 1.配置一个redux store过于复杂
 * 2.做任何redux的事情我都需要添加很多包
 * 3.redux需要太多的样板代码
 * 
 * 
 */

import defaultCounterSlice from '../features/counter/counterSlice';

console.log('isTrue:', defaultCounterSlice === counterSlice, defaultCounterSlice === counterSlice.reducer);
console.log(defaultCounterSlice, defaultCounterSlice.reducer, counterSlice);

export default configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})