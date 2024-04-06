import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 2,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      // este reducer es para que se mantenga el valor del count cuando cambiamos de rutas ( guardado en las cookies aun no )
      if (state.isReady) return; // si ya se ha inicializado se queda como está, es decir, no cambiará el valor

      state.count = action.payload; // crea el valor y lo guarda en la acción
      state.isReady = true; // cambia el valor a true para que cuando cambie de ruta no se resetee
    },
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

export const { addOne, substractOne, resetCount, initCounterState } =
  counterSlice.actions;

export default counterSlice.reducer;
