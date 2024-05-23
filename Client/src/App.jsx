import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import QuoteGrid from './Components/QuoteGrid.jsx';
import Nav from './Components/Nav.jsx';
import { quoteApi } from './api/quoteAPI';

function App() {
  const { getQuotes } = quoteApi();
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    if (!quotes) {
      retieveQuotes();
    }
  }, [quotes]);

  const retieveQuotes = async () => {
    const items = await getQuotes();
    await setQuotes(items);
    setLoading(true);
  }

  return (
    <Box w='100vw' h='100vh' overflow='auto' background='radial-gradient(circle, #25273D, #010316)'>
      <Nav refresh={retieveQuotes} setQuotes={setQuotes}></Nav>
      {loading && ( 
        <QuoteGrid quotes={quotes}/>
      )}
    </Box>
  );
}

export default App;
