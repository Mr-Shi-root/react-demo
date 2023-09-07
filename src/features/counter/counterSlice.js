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

export { addNum, getNum } from counterSlice.actions
export default counterSlice.reducer