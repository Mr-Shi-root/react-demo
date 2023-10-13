import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        addNum: state => {
            console.log(state);
            state.value += 1;
        },
        getNum: state => {
            return state.value;
        },
        addCustomNum: (state, actions) => {
            console.log('actions:', actions);
            state.value += actions.payload
        }
    }
})

console.log('counterSlice:', counterSlice)
console.log(counterSlice.reducer);

export const { addNum, getNum, addCustomNum } = counterSlice.actions
export default counterSlice.reducer