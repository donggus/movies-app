import React, { useContext } from 'react';
import { 
  Text, 
  View, 
  Image, 
  StyleSheet, 
  ScrollView, 
  ActivityIndicator, 
  TouchableOpacity
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/Navigation';
import { windowHeight } from '../helpers/screenDimensions';
import Icon from 'react-native-vector-icons/Ionicons';

import { useMovieDetails } from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import { FavoriteContext } from '../context/FavoriteContext';

// Extends the type of params assigned in the ./navigation/Navigation file.
interface Props extends NativeStackScreenProps<RootStackParams, 'DetailScreen'> {};

const DetailScreen = ({ route, navigation }: Props ) => {

    const { favorites, addFavorite, removeFavorite } = useContext( FavoriteContext );
    const { favoriteMovies } = favorites;

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const { isLoading, cast, fullMovie } = useMovieDetails( movie.id );

    return (
      <ScrollView>
        <View style={ styles.backBtn }>
          <TouchableOpacity
          activeOpacity={0.8}
            onPress={ () => navigation.pop() }
          >
            <Icon 
              name="arrow-back-outline"
              color='white'
              size={35}
            />
          </TouchableOpacity>
        </View>
        {
          favoriteMovies.filter( fav => fav.id === movie.id ).length ?
            (
            <View style={ styles.favoritesBtn }>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={ () => removeFavorite( movie ) }
              >
                <Icon 
                  name="heart"
                  color='#CC0066'
                  size={35}
                  style={{ marginTop: 5 }}
                />
              </TouchableOpacity>
            </View>
            ):(
            <View style={ styles.favoritesBtn }>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={ () => addFavorite( movie ) }
              >
                <Icon 
                  name="heart-outline"
                  color='#CC0066'
                  size={35}
                  style={{ marginTop: 5 }}
                />
              </TouchableOpacity>
            </View>
            )
        }

        <View style={ styles.imageContainer }>
          <Image 
            source={{ uri }}
            style={ styles.posterImg }
          />
        </View>
        <View style={ styles.headerContainer }>
          <Text style={ styles.subtitle }>{movie.title}</Text>
          <Text style={ styles.title }>{movie.original_title}</Text>
        </View>
        {
          isLoading ?
          <ActivityIndicator style={{ marginTop: 20 }} size={35}/> 
          :
          <MovieDetails fullMovie={fullMovie!} cast={cast!}/>
        }
      </ScrollView>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: windowHeight * 0.7,
    width: '100%',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,

    elevation: 10,
  },

  posterImg: {
    flex: 1,
    borderRadius: 25,
  },
  headerContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    opacity: 0.6,
    fontStyle: 'italic'
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  backBtn: {
    position: 'absolute',
    zIndex: 10,
    elevation: 10,
    top: 50,
    left: 15
  },
  favoritesBtn: {
    position: 'absolute',
    zIndex: 10,
    elevation: 10,
    top: 50,
    right: 15,
    backgroundColor: 'white',
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
  
})