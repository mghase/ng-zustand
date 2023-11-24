import { Injectable } from '@angular/core';
import { StateCreator, ZustandBaseService } from 'core';
import { createStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CounterState {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

@Injectable({
  providedIn: 'root',
})



// export const useBearStore = create(
//   persist(
//     (set, get) => ({
//       bears: 0,
//       addABear: () => set({ bears: get().bears + 1 }),
//     }),
//     {
//       name: 'food-storage', // name of the item in the storage (must be unique)
//       storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//     },
//   ),
// )

export class CounterService extends ZustandBaseService<CounterState> {
  // initStore(): StateCreator<CounterState> {
    initStore() {
    return persist((set) => ({
      counter: 0,
      increment: () => set((state:any) => ({ counter: state.counter + 1 })),
      decrement: () => set((state:any) => ({ counter: state.counter - 1 })),
    }),
    { name: 'TODO_STORE', storage: createJSONStorage(() => sessionStorage) }
    );
  }

}
