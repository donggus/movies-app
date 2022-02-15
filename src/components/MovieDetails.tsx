import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { FullMovie } from '../interfaces/movieInterface';

import Icon from 'react-native-vector-icons/Ionicons';
import CastCard from './CastCard';

interface Props {
    fullMovie: FullMovie;
    cast: Cast[];
}

const MovieDetails = ({ fullMovie, cast }:Props) => {
    return (
        <>
            <View>
                {/* Rating */}
                <View style={ styles.rating }>
                    <Icon
                        name="star"
                        color="orange"
                        size={ 16 }
                    />
                    <Text style={{ ...styles.ratingText, marginLeft: 10, fontWeight: 'bold', color: 'orange', fontSize: 16 }}>
                        {fullMovie.vote_average}
                    </Text>
                    <Text style={ styles.ratingText }> - {fullMovie.genres.map( data => data.name ).join(', ')}</Text>
                </View>
                {/* Synopsis */}
                <Text style={ styles.titles }>Sinopsis</Text>
                <Text style={ styles.content }>
                    {fullMovie.overview}
                </Text>
                {/* Casting */}
                <View style={ styles.castSection }>
                    <Text style={ styles.titles }>Actores</Text>
                    <FlatList 
                        data={cast}
                        keyExtractor={ (item) => item.id.toString() }
                        renderItem={ ({item}) => <CastCard actor={item}/> }
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10 }}
                    />
                </View>
            </View>
        </>
  )
}

export default MovieDetails;

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center'
    },
    ratingText: {
        color: 'white',
        fontSize: 12,
    },
    titles: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10
    },
    content: {
        fontSize: 14,
        marginTop: 10,
        color: 'white',
        marginLeft: 10,
        fontStyle: 'italic',
        lineHeight: 20
    },
    castSection: {
        marginTop: 20,
        marginBottom: 50,
    }
})