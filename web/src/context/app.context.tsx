import { createContext } from 'react'

export const initialState = {
  isMobileSearchActive: false,
}

export const AppContext = createContext(undefined);
export const AppDispatchContext = createContext(undefined);
