import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import SaveQuoteButton from './SaveQuote';
import MoreInformationButton from './QuoteInformation';

function QuoteBox({ quote }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Flex
            flexDir={'column'}
            borderRadius={'1em'}
            justifyContent='center'
            alignItems='center'
            h='100%'
            w='100%'
            position={'relative'}
            padding={'5%'}
            background='radial-gradient(circle, #25273D, #010316)'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            _hover={{
                cursor: 'pointer'
            }}
            overflow="hidden" 
            zIndex={hovered ? 10 : 1}
        >
            <MoreInformationButton quote={quote} style={{ zIndex: 20 }} />
            <Text color={'white'} fontSize={'20px'} style={{ position: 'absolute', zIndex: 20 }}>{quote.content}</Text>
            <Text color={'grey'} fontSize={'15px'} style={{  zIndex: 20 }}>- {quote.author}</Text>
            <SaveQuoteButton quote={quote} style={{  zIndex: 20 }} />
        </Flex>
    )
}

export default QuoteBox;
