import { Grid, useBreakpointValue} from '@chakra-ui/react';
import QuoteBox from './QuoteBox';


function QuoteGrid({ quotes }) {
  const screenSize = useBreakpointValue({ base: true, lg: false, },)
  

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
      <Grid templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(6,1fr)' }} templateRows={'repeat(6,1fr)'} gap={4} p={4}>
        {quotes.map((item, index) => (
          <QuoteBox quote={item} index={index} mobile={screenSize} />
        ))}
      </Grid>
    </>
  );
}

export default QuoteGrid;
