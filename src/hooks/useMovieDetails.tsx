import { useEffect, useState } from "react"
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";
import { FullMovie } from "../interfaces/movieInterface";

interface MovieDetails {
    isLoading: boolean;
    fullMovie?: FullMovie;
    cast: Cast[];
}

export const useMovieDetails = ( movieId: number ) => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails>({
        isLoading: true,
        fullMovie: undefined,
        cast: []
    });
    // console.log(movieId);

    const getMovieDetails = async() => {
        const movieDetailsPromise = movieDB.get<FullMovie>(`${movieId }`);
        const creditsPromise = movieDB.get<CreditsResponse>(`${movieId }/credits`);

        // Destructuring the response into an array for each index of Promises
        const [ detailsResponse, creditsResponse ] = await Promise.all([ movieDetailsPromise, creditsPromise ])

        setMovieDetails({
            isLoading: false,
            fullMovie: detailsResponse.data,
            cast: creditsResponse.data.cast
        })
    }

    useEffect(() => {
      getMovieDetails();
    }, [])
    
    return {
        ...movieDetails
    }
}