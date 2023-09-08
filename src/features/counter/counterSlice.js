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
        }
    }
})

console.log('counterSlice:', counterSlice)
console.log(counterSlice.reducer);

export const { addNum, getNum } = counterSlice.actions
export default counterSlice.reducer