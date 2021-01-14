import { createContext } from 'react'
import { AppState } from '../interfaces'



export const initialState: AppState = {
  isMobileSearchActive: true,
  locations: [],
  selectedCountry: '',
}

export const AppContext =  createContext<AppState>(undefined);
export const AppDispatchContext = createContext(undefined);
