import React, { ReactElement, createContext, useState } from 'react';

// Define the type of the context data
interface Props {
  likes: string[];
  setLikes: (data: string[]) => void;
}

// Create a new context with the defined type
export const LikeContext = createContext<Props>({} as Props);

// Create a provider component to provide the data to child components
const LikeContextProvider = ({ children }: { children: ReactElement }) => {
  const [likes, setLikes] = useState<string[]>([]);

  return (
    <LikeContext.Provider value={{ likes, setLikes }}>
      {children}
    </LikeContext.Provider>
  );
};
export default LikeContextProvider;
