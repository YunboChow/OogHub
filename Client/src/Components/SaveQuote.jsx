import {useState, useEffect} from "react";
import { IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function SaveQuoteButton({ quote }){

    const [faved, setFaved] = useState(false);
   
    const load = ()=>{
        const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
        let QIndex = findQuoteIndex(quote,savedQuotes);
        if(QIndex !== -1){
            setFaved(true);
        }else{
            setFaved(false);
        }
    }
       
    useEffect(() => {
        load();
    });

    const saveQuote = (quote) => {
        const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
        const index = findQuoteIndex(quote,savedQuotes);
        if(index === -1){
            setFaved(true);
            const updatedSavedQuotes = [...savedQuotes, quote];
            localStorage.setItem('savedQuotes', JSON.stringify(updatedSavedQuotes));
        }else{
            setFaved(false);
            const updatedDeletedQuotes = [...savedQuotes];
            updatedDeletedQuotes.splice(index,1);
            localStorage.setItem('savedQuotes', JSON.stringify(updatedDeletedQuotes));
        }
        console.log(faved)
      };

      function findQuoteIndex(quote,savedQuotes){
        for(let i = 0; i < savedQuotes.length; i++){
            if(savedQuotes[i]._id === quote._id){
                return i;
            }
        }
        return -1;
  }

  return (
    <IconButton
      icon={<StarIcon/> }
      color={faved === true ? 'yellow.300' : '#D1D1D1' }
      bgColor={'transparent'}
      position='absolute'
      bottom={3}
      right={3}
      onClick={() => saveQuote(quote)}
    />
  );

}


export default SaveQuoteButton;