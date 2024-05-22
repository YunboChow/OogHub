import { IconButton } from '@chakra-ui/react';
import { AddIcon, StarIcon } from '@chakra-ui/icons';
import React, {useState} from "react";



function SaveQuoteButton({ quote }){
    const [faved, setFaved] = useState(false);

    const saveQuote = (quote) => {
        const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
        if(!checkIfQuoteIsSaved(quote,savedQuotes)){
            setFaved(true);
            const updatedSavedQuotes = [...savedQuotes, quote];
            localStorage.setItem('savedQuotes', JSON.stringify(updatedSavedQuotes));
        }else{
            setFaved(false);
        }
        console.log(faved)
      };

      function checkIfQuoteIsSaved(quote,savedQuotes){
        for(let i = 0; i < savedQuotes.length; i++){
            if(savedQuotes[i]._id === quote._id){
                return true;
            }
        }
        return false;
  }

  return (
    <IconButton
      icon={<StarIcon/> }
      color={faved === true ? 'yellow.300' : 'grey.600' }
      bgColor={'blue.500'}
      position='absolute'
      bottom={3}
      right={3}
      onClick={() => saveQuote(quote)}
    />
  );

}


export default SaveQuoteButton;