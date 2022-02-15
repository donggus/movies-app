import React, { useContext } from 'react';
import { View, ActivityIndicator, ScrollView, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { windowWidth } from '../helpers/screenDimensions';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import { FavoriteContext } from '../context/FavoriteContext';
import GradientBackground from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';
import getImageColors from '../helpers/getImageColors';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';
 


const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    
    const { setMainColors } = useContext( GradientContext );
    const { favorites } = useContext( FavoriteContext );
    const { favoriteMovies } = favorites;

    const { nowPlaying, upcoming, isLoading} = useMovies();


    const getPosterColors = async(index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
        const { primary = "transparent", secondary = "transparent" } = await getImageColors( uri );
        // console.log({ primary, secondary })
        setMainColors({ primary, secondary })
    }

    // useEffect trigger to get the movie poster's color at the very first start.
    useEffect(() => {
      if ( nowPlaying.length > 0) {
          getPosterColors(0)
      }
    }, [ nowPlaying ])

    
    if ( isLoading ) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color='red' size={100}/>
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top }}>
                    {/* Carousel Principal */}
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={ nowPlaying }
                            renderItem={ ({ item }: any) => <MoviePoster movie={ item }/> }
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            onSnapToItem={ (index) => getPosterColors( index ) }
                        />
                    </View>
                    {/* Películas Populares */}
                    <HorizontalSlider title='En Cartelera' movies={nowPlaying}/>
                    <HorizontalSlider title='¡Próximamente!' movies={upcoming}/>
                    <HorizontalSlider title='Mis Favoritos' movies={favoriteMovies} ifEmpty="Tu lista de Favoritos está vacía :("/>
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen;