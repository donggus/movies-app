import React from 'react';
import { createContext, useState } from "react"

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {
  
    const [ colors, setColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })
  
    const [ prevColors, setPrevColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const setMainColors = ( colors: ImageColors ) => {
        setColors( colors );
    }

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
        }}
        >
            {children}
        </GradientContext.Provider>
    )
}