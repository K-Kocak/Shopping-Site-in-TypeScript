
//, createJSONStorage

import { create } from "zustand";
import { persist } from "zustand/middleware";



/*const WithStore = (Component: any, primary: any, secondary?: any, tertiary?: any) => (props: any) => {
  const primaryStore = primary();
  const secondaryStore = secondary ? secondary() : null;
  const tertiaryStore = tertiary ? tertiary() : null;

  return <Component {...props} pStore={primaryStore} sStore={secondaryStore} tStore={tertiaryStore} />;
}*/

export interface loginUser {
  username: string;
  password: string;

  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

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
  price: number,
  id: string
  }
  

export interface CartItems {
  CartItems: CartItem[];
  addCartItem: (CartItems: CartItem[]) => void;
  }

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




export const WithStore = (Component: any, primary?: any, secondary?: any) => (props: any) => {
  const primaryStore = primary();
  const secondaryStore = secondary ? secondary() : null;
  return <Component {...props} pStore={primaryStore} sStore={secondaryStore}/>;
}

export default WithStore;