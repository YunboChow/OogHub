import { useState, useEffect } from 'react';
import { Grid, GridItem, Box, Flex, Text, Button, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { quoteApi } from '../api/quoteAPI';
import SaveQuoteButton from './SaveQuote';

function QuoteGrid() {
  const { getQuotes } = quoteApi();
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(20);
  const [quotes, setQuotes] = useState(); // Generating 28 items

 useEffect(() => {
    if (!quotes) {
      retieveQuotes();
    }
 }, [quotes]);

  const retieveQuotes = async () =>{
    const items = await getQuotes();
    await setQuotes(items);
    setLoading(true);
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
      {loading && (
        <Grid templateColumns={'repeat(6,1fr)'} templateRows={'repeat(6,1fr)'} gap={4}>
          {quotes.map((item, index) => (
            <GridItem key={index} colSpan={getRandomSpanColumn(index)} rowSpan={getRandomSpanRow(index)} bg="blue.500" borderRadius={'2em'} >
              <Flex flexDir={'column'} justifyContent='center' alignItems='center' h='100%' w='100%' position='relative' padding={'5%'}>
                <Text color={'white'} fontSize={'20px'}>{item.content}</Text>
                <Text fontSize={'15px'}>{item.author}</Text>
                <SaveQuoteButton quote={item}/>
              </Flex>
            </GridItem> 
          ))} 
        </Grid>
      )}
    </>
  );
}

export default QuoteGrid;
