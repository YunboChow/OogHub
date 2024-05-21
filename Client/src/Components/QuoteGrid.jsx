import { useState, useEffect } from 'react';
import { Grid, GridItem, Box, Flex, Text, Button, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function QuoteGrid() {
  const [counter, setCounter] = useState(20);
  const [quotes, setQuotes] = useState(new Array(24).fill(0).map((_, index) => ({ id: index + 1 }))); // Generating 28 items

  const getRandomSpanColumn = (index) => {
    if (index % 6 === 0 || (index + 1) % 12 === 0) {
      return 2;
    }
    return 1
  };
  const getRandomSpanRow = (index) => {
    if (index === 18 || index === 6 || index === 9 || index === 21) {
      return 40;
    }
    return 20;
  };
  const increaseCounter = () => {
    setCounter(counter + 1)
    return counter;
  }
  return (
    <Grid templateColumns={'repeat(6,1fr)'} templateRows={'repeat(6,1fr)'} gap={4}>
      {quotes.map((item, index) => (
        <GridItem key={index} colSpan={getRandomSpanColumn(index)} rowSpan={getRandomSpanRow(index)} bg="blue.500" borderRadius={'2em'} >
          <Flex flexDir={'row'} justify='center' align='center' h='100%' w='100%' position='relative'>
            <Text>Item {index}</Text>
            <IconButton icon={<AddIcon/>} bgColor={'blue.500'} position='absolute' bottom={3} right={3}/>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
}

export default QuoteGrid;
