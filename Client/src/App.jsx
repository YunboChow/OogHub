import { useState, useEffect } from 'react';
import { Box,useBreakpointValue } from '@chakra-ui/react';
import QuoteGrid from './Components/QuoteGrid.jsx';
import Nav from './Components/Nav.jsx';
import { quoteApi } from './api/quoteAPI';
import logo from '/assets/TheOog.png';
import { motion } from 'framer-motion';

function App() {
  const { getQuotes } = quoteApi();
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState();
  const [refreshedQuotes, setRefreshedQuotes] = useState(true);
  const screenSize = useBreakpointValue({ base: '-35%', lg: '0%', },)

  useEffect(() => {
    if (!quotes) {
      retieveQuotes();
    }
    if (refreshedQuotes) {
      localStorage.setItem('previousQuotes', JSON.stringify(quotes));
    }
    console.log(quotes);
  }, [quotes]);

  const retieveQuotes = async () => {
    const items = await getQuotes();
    await setQuotes(items);
    setLoading(true);
    setRefreshedQuotes(true);
  }

  return (
      <Box w='100vw' h='100vh' overflow='auto' background='radial-gradient(circle, #25273D, #010316)' zIndex={22} >
        <Nav refresh={retieveQuotes} setQuotes={setQuotes} setRefreshedQuotes={setRefreshedQuotes} />
        {loading && (
          <>
          {console.log(screenSize)}
            <motion.div
              variants={{
                hidden: { left: screenSize },
                visible: { left: '100%' },
              }}
              initial='hidden'
              animate='visible'
              transition={{ duration: 4, delay: 1 }}
              style={{
                position: 'absolute',
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                backgroundImage: `url(${logo})`,
                backgroundSize: 'cover',
                zIndex: 21,
              }}
            />
            <QuoteGrid quotes={quotes} />
          </>
        )}
      </Box>
  );
}

export default App;
