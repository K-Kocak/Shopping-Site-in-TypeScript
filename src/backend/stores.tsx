/* eslint-disable react-refresh/only-export-components */
import { create, StoreApi } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


// Add item to store
export function append<T>(store: StoreApi<T[]>, item: T) {
  store.setState((state) => [...state, item]);
}

// Prepend item to store
export function prepend<T>(store: StoreApi<T[]>, item: T) {
  store.setState((state) => [item, ...state]);
}

// Get items in store as array
export function asArray<T>(store: StoreApi<T[]>): T[] {
  return Object.values(store.getState());
}

export function remove<T>(store: StoreApi<T[]>, item: T) {
  store.setState((state) =>{
    const index = state.indexOf(item);
    if (index > -1) {
      state.splice(index, 1);
    }
    return [...state];
  })
}

const WithStore = (Component: any, primary: any, secondary?: any, tertiary?: any) => (props: any) => {
  const primaryStore = primary();
  const secondaryStore = secondary ? secondary() : null;
  const tertiaryStore = tertiary ? tertiary() : null;

  return <Component {...props} pStore={primaryStore} sStore={secondaryStore} tStore={tertiaryStore} />;
}

export default WithStore;

/*const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
  }))

  function BearCounter() {
    const bears = useStore((state) => state.bears)
    return <h1>{bears} around here...</h1>
  }
  
  function Controls() {
    const increasePopulation = useStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>one up</button>
  }*/