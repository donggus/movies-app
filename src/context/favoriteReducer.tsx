import { FavoriteState } from "./FavoriteContext";

type FavoriteAction = 
    | { type: 'addFavorite', payload: any }
    | { type: 'removeFavorite', payload: any };

export const favoriteReducer = ( state: FavoriteState, action: FavoriteAction): FavoriteState => {
    switch (action.type) {
        case 'addFavorite':
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies , action.payload].reverse()
            }
        case 'removeFavorite':
            return {
                ...state,
                favoriteMovies: state.favoriteMovies.filter( movie => movie !== action.payload )
            }
    
        default:
            return state;
    }
}