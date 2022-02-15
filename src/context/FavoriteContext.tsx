import React, { createContext, useReducer } from "react";
import { Movie } from "../interfaces/movieInterface";
import { favoriteReducer } from "./favoriteReducer";

// Defining the interface model schema
export interface FavoriteState {
    favoriteMovies: Array<Movie>;
}

// Initial State
export const initialState: FavoriteState = {
    favoriteMovies: []
}
// Interface for context's props
export interface FavoriteContextProps {
    favorites: FavoriteState;
    addFavorite: (movieData: any) => void;
    removeFavorite: (movieData: any) => void;
}

// Create Context
export const FavoriteContext = createContext({} as FavoriteContextProps);

export const FavoriteProvider = ({ children }: any) => {

    const [favoriteState, dispatch] = useReducer( favoriteReducer, initialState );

    const addFavorite = ( movieData: any ) => {
        dispatch({ type: 'addFavorite', payload: movieData });
    }

    const removeFavorite = ( movieData: any ) => {
        dispatch({ type: 'removeFavorite', payload: movieData });
    }

    return (
        <FavoriteContext.Provider value={{
            favorites: favoriteState,
            addFavorite,
            removeFavorite,
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}