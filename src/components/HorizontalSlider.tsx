import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface'
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
    ifEmpty?: string;
}

const HorizontalSlider = ({ title, movies, ifEmpty }: Props) => {
    return (
        <View style={{ height: movies.length ? 260 : 100}}>
            {
                title && 
                <Text style={ styles.titles }>{title}</Text>
            }
            {
                movies.length ? 
                <FlatList 
                    data={ movies }
                    renderItem={ ({ item }: any) => (
                            <MoviePoster movie={ item } width={140} height={200}/>
                    )}
                    keyExtractor={ (item) => item.id.toString() }
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                :
                <View style={ styles.emptyContent }>
                    <Text style={ styles.emptyText }>{ifEmpty}</Text>
                </View>
            }
        </View>
    )
}

export default HorizontalSlider;

const styles = StyleSheet.create({
    titles: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
        marginBottom: 5,
    },
    emptyContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: '#CC0066',
        marginHorizontal: 50,
        borderRadius: 50,
        paddingVertical: 5
    },
    emptyText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white',
        fontStyle: 'italic'
    }
})