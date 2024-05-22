import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function SaveQuoteButton({ quote }) {
  const saveQuote = (quote) => {
    const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    const updatedSavedQuotes = [...savedQuotes, quote];
    localStorage.setItem('savedQuotes', JSON.stringify(updatedSavedQuotes));
  };

  return (
    <IconButton
      icon={<AddIcon />}
      bgColor={'blue.500'}
      position='absolute'
      bottom={3}
      right={3}
      onClick={() => saveQuote(quote)}
    />
  );
}

export default SaveQuoteButton;