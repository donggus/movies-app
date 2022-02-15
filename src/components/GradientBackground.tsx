import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: Props) => {

    const { colors } = useContext( GradientContext );

    return (
        <View style={{ flex: 1, }}>
            <LinearGradient 
                colors={[ colors.primary, colors.secondary, '#113155']}
                style={{ ...StyleSheet.absoluteFillObject }}
                end={{ x: 0.5, y: 0.5 }}
            />
            {children}
        </View>
    )
}

export default GradientBackground