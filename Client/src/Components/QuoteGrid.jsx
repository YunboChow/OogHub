import { useState, useEffect } from 'react';
import { Grid, GridItem, Box, Flex, Text, Button, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import SaveQuoteButton from './SaveQuote';
import MoreInformationButton from './QuoteInformation';
import QuoteBox from './QuoteBox';

function QuoteGrid({ quotes }) {

  const [counter, setCounter] = useState(20);

  const getRandomDir = () => {
    console.log();
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(6);
    const value = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    console.log(value);
    if (value === 1) return 't';
    if (value === 2) return 'tl';
    if (value === 3) return 'tr';
    if (value === 4) return 'br';
    if (value === 5) return 'b';
    if (value === 6) return 'bl';
    if (value === 4) return 'br';
    if (value === 5) return 'b';
    if (value === 6) return 'bl';

  }

  const getRandomSpanColumn = (index) => {
    if (index % 6 === 0 || (index + 1) % 12 === 0) {
      return 2;
    }
    return 1
  };
  const getRandomSpanRow = (index) => {
    if (index === 18 || index === 6 || index === 9 || index === 21) {
      return 20;
    }
    return 10;
  };
  return (
    <>
      <Grid templateColumns={'repeat(6,1fr)'} templateRows={'repeat(6,1fr)'} gap={4} p={4}>
        {quotes.map((item, index) => (
          <GridItem key={index} colSpan={getRandomSpanColumn(index)} rowSpan={getRandomSpanRow(index)} borderRadius={'2em'} >
            <QuoteBox quote={item} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default QuoteGrid;
