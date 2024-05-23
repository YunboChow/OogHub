import { IconButton } from '@chakra-ui/react';
import { AddIcon, StarIcon,InfoIcon } from '@chakra-ui/icons';
import React, {useState, useEffect} from "react";


function moreInfromationButton({ quote }){


    const getInfoAboutQuote = (quote) => {
      
      };

      

  return (
    <IconButton
      icon={<InfoIcon/> }
      color={faved === true ? 'yellow.300' : '#D1D1D1' }
      bgColor={'transparent'}
      position='absolute'
      bottom={3}
      right={3}
      onClick={() => saveQuote(quote)}
    />
  );

}


export default moreInfromationButton;