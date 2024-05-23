import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import QuoteGrid from './Components/QuoteGrid.jsx';
import Nav from './Components/Nav.jsx';
import { quoteApi } from './api/quoteAPI';

function App() {
  const { getQuotes } = quoteApi();
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState();
  const [refreshedQuotes, setRefreshedQuotes] = useState(true);

  useEffect(() => {
    if (!quotes) {
      retieveQuotes();
    }
    if(refreshedQuotes){
      localStorage.setItem('previousQuotes', JSON.stringify(quotes));
    }
  }, [quotes]);

  const retieveQuotes = async () => {
    const items = await getQuotes();
    await setQuotes(items);
    setLoading(true);
    setRefreshedQuotes(true);
  }

  return (
    <Box w='100vw' h='100vh' overflow='auto' background='radial-gradient(circle, #25273D, #010316)'>
      <Nav refresh={retieveQuotes} setQuotes={setQuotes} setRefreshedQuotes={setRefreshedQuotes}></Nav>
      {loading && ( 
        <QuoteGrid quotes={quotes}/>
      )}
    </Box>
  );
}

export default App;
