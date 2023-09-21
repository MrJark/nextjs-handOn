
//! OJO, PARA USAR EL REDUCER NECESITA ESTAR DEL LADO DEL CLIENTE

import {  PayloadAction, createSlice } from '@reduxjs/toolkit'


interface CounterState {
    count: number
}


const initialState: CounterState = {
    count: 2,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { // las acciones que queremos mandarle para qu ecambien el state
    addOne(state) {
        state.count ++;
    },
    substractOne(state) {
        if( state.count === 0 ) return; // para que no hayan números negativos
        state.count --;
    },
    resetCount(state, action: PayloadAction<number>) { // se recomienda que hagan acciones pura solo, es decir, a través de la acción genere un nuevo state y ya
        if (action.payload < 0 ) state.count = 0; // para evitar números negativos
        state.count = action.payload
    },
  }
});

export const { addOne, resetCount, substractOne } = counterSlice.actions;

export default counterSlice.reducer;