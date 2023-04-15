import React, { ReactElement, createContext, useState } from 'react';

// Define the type of the context data
interface Props {
  data: string[];
  setData: (data: string[]) => void;
}

// Create a new context with the defined type
export const CartContext = createContext<Props>({} as Props);

// Create a provider component to provide the data to child components
const CartContextProvider = ({ children }: { children: ReactElement }) => {
  const [data, setData] = useState<string[]>([]);

  return (
    <CartContext.Provider value={{ data, setData }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
