import { create } from 'zustand';
import { persist } from 'zustand/middleware';
//, createJSONStorage



// Add item to store
/*
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

// Remove item from store
export function remove<T>(store: StoreApi<T[]>, item: T) {
  store.setState((state) =>{
    const index = state.indexOf(item);
    if (index > -1) {
      state.splice(index, 1);
    }
    return [...state];
  })
}
*/
/*const WithStore = (Component: any, primary: any, secondary?: any, tertiary?: any) => (props: any) => {
  const primaryStore = primary();
  const secondaryStore = secondary ? secondary() : null;
  const tertiaryStore = tertiary ? tertiary() : null;

  return <Component {...props} pStore={primaryStore} sStore={secondaryStore} tStore={tertiaryStore} />;
}*/
/*
export interface counterValue {
  value: number;

  setValue: (value: number) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useValue = create<counterValue>()(
  persist(
    (set): counterValue => ({
      value: 0,
      setValue: (value: number) => set({ value })  
    }),
    {
      name: "test-state",
    }
  )
);*/

export interface loginUser {
  username: string;
  password: string;

  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const userLogin = create<loginUser>()(
  persist(
    (set): loginUser => ({
      username: "",
      password: "",

      setUsername: (username: string) => set({ username }),
      setPassword: (password: string) => set({ password }),
    }),
    {
      name: "user-login-state"
    }
  )
)

export type CartItem = {
  name: string,
  price: number
}

export type CartItems = {
  CartItems: CartItem[];
  addCartItem: (CartItems: CartItem[]) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const userCartItems = create<CartItems>()(
  persist(
    (set): CartItems => ({
      CartItems: [],
      
      addCartItem: (CartItems: CartItem[]) => set({ CartItems })
    }),
    {
      name: "user-cart"
    }
  )
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WithStore = (Component: any, primary?: any, secondary?: any) => (props: any) => {
  const primaryStore = primary();
  const secondaryStore = secondary ? secondary() : null;
  return <Component {...props} pStore={primaryStore} sStore={secondaryStore}/>;
}

export default WithStore;