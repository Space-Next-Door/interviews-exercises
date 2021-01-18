import { createContext } from 'react'
import { AppState } from '../interfaces'



export const initialState: AppState = {
  isMobileSearchActive: false,
  locations: [],
  selectedCountry: '',
  locationInputText: ''
}

export const AppContext =  createContext<AppState>(undefined);
export const AppDispatchContext = createContext(undefined);
