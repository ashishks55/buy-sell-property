import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    filters: {
        property_type: [],
        min_price: 0,
        max_price: 0,
        bedrooms: 0,
        bathrooms: 0,
        parking: 0,
        min_sqft: 0,
        max_sqft: 0,
        city: ''
    }
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const setFilters = (filters) => {
        dispatch({
            type: 'SET_FILTERS',
            payload: filters
        })
    }

    const resetFilters = (selected_language) => {
        dispatch({
            type: 'RESET_FILTERS',
            payload: initialState
        })
    }
    
    return (<GlobalContext.Provider value={{
        filters: state.filters,
        setFilters,
        resetFilters,
    }}>
    {children}
    </GlobalContext.Provider>)
}