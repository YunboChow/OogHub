import { useState, useEffect} from 'react';
import {Box} from '@chakra-ui/react';
import QuoteGrid from './Components/QuoteGrid.jsx';

function App() {
  const [quotes, setQuotes] = useState(new Array(499).fill(0).map((_, index) => ({ id: index + 1 }))); // Generating 28 items

  const getRandomSpanColumn = () => {
    return Math.floor(Math.random() * (3 - 1) + 1);
  };
  const getRandomSpanRow = () => {
    return Math.floor(Math.random() * (30 - 10) + 10);
  };

  return (
    <Box w="100vw" h="100vh" overflow="auto" p={4}>
      <QuoteGrid/>
    </Box>
  );
}

export default App;
