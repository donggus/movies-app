import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface";

interface MoviesState {
    nowPlaying: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [ moviesState, setMoviesState ] = useState<MoviesState>({
        nowPlaying: [],
        upcoming: [],
    });

    const getMovies = async() => {
        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const upcomingPromise =  movieDB.get<MovieDBMoviesResponse>('/upcoming');
        const response = await Promise.all([ 
            nowPlayingPromise, 
            upcomingPromise 
        ]);

        setMoviesState({
            nowPlaying: response[0].data.results,
            upcoming: response[1].data.results
        })       
        
        setIsLoading(false);

    }

    useEffect(() => {
        // Now playing movies
        getMovies();
    }, [])
    
    
    return {
        ...moviesState,
        isLoading
    }
}
