import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast;
}

const CastCard = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;
    
  return (
    <View style={ styles.cardContainer }>
        {
            actor.profile_path && 
            <Image
                source={{ uri }}
                style={ styles.profileImg }
            />
        }
        <View style={ styles.actorInfo }>
            <Text style={ styles.names }>
                { actor.name }
            </Text>
            <Text style={ styles.character }>
                { actor.character }
            </Text>
        </View>
    </View>
  )
}

export default CastCard;

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#1e5594',
        marginRight: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    },
    actorInfo: {
        marginLeft: 10,
        marginRight: 10
    },
    names: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    character: {
        fontSize: 12,
        color: 'white'
    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 10
    }
})