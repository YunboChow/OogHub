import { useState, useEffect} from 'react';
import { Grid, GridItem, Box, Flex, Text, Button } from '@chakra-ui/react';

function QuoteGrid() {
  const [quotes, setQuotes] = useState(new Array(499).fill(0).map((_, index) => ({ id: index + 1 }))); // Generating 28 items

  const getRandomSpanColumn = () => {
    return Math.floor(Math.random() * (3 - 1) + 1);
  };
  const getRandomSpanRow = () => {
    return Math.floor(Math.random() * (30 - 10) + 10);
  };

  return (
      <Grid templateColumns={'repeat(6,1fr)'} templateRows={'repeat(6,1fr)'} gap={4}>
        {quotes.map((item, index) => (
          <GridItem key={index} colSpan={getRandomSpanColumn()} rowSpan={getRandomSpanRow()} bg="blue.500" borderRadius={'2em'}>
            <Flex justify="center" align="center" h="100%" w="100%">
              <Text>Item {item.id}</Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
  );
}

export default QuoteGrid;
