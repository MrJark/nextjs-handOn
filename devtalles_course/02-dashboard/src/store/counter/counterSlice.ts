import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 2,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addOne(state) {
      // si pongo state, cofe el state que he creado
      state.count++; // el count es el de las initialStore
    },
    substractOne(state) {
      if (state.count === 0) return;
      state.count--;
    },
    resetCount(state, action: PayloadAction<number>) {
      if (action.payload < 0) state.count = 0;
      state.count = action.payload;
    },
  },
});

export const { addOne, substractOne, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
