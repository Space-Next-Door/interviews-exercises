import { ApolloError } from "@apollo/client";
export interface AppState {
    isMobileSearchActive: Boolean,
    locations?: any,
    countries?: any,
    selectedCountry?: string
    locationInputText?: string
  }

  export interface Countries {
    name_en: string    
}


export interface CountriesState {
  loading:boolean;
  error:string[] | ApolloError;
  countries: Countries[];
}

export interface Location {
  country: {
    name_en: string
  }
  city: {
    name_en: string
  }
  district: {
    name_en: string
  }
  
}
export interface LocationParms {
  name: string,
  country: string,
}
export interface LocationState {
  loading:boolean;
  error:string[] | ApolloError;
  data: Location[];
}