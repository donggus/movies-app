import React from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/Navigation';
import { useNavigation } from '@react-navigation/core';

import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';


type HomeScreenProps = NativeStackNavigationProp<RootStackParams, 'HomeScreen'>;

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

    const navigation = useNavigation<HomeScreenProps>();
    
    return (
        <TouchableOpacity 
            style={{ width, height, marginHorizontal: 8}}
            activeOpacity={0.8}
            onPress={ () => navigation.navigate('DetailScreen', movie) }
        >
            <View style={ styles.imageContainer }>
                <Image
                    source={{ uri }}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>
    )
}

export default MoviePoster;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    }
})