import React from 'react'
import ImageColors from 'react-native-image-colors';

const getImageColors = async( uri: string ) => {

  const colors = await ImageColors.getColors( uri, {});

  let primary;
  let secondary;

  if ( colors.platform === "ios" ) {
    primary = colors.primary;
    secondary = colors.secondary;
  } else {
    primary = colors.dominant;
    secondary = colors.vibrant;
  }

  return { 
    primary, 
    secondary 
  };

}

export default getImageColors;