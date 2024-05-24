import { useState, useEffect } from 'react';
import { Grid, GridItem, Box, Flex, Text, Button, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import SaveQuoteButton from './SaveQuote';
import MoreInformationButton from './QuoteInformation';

function QuoteBox({ quote }) {
    return (
        <Flex flexDir={'column'} borderRadius={'1em'} justifyContent='center' alignItems='center' h='100%' w='100%'
            position={'relative'}
            padding={'5%'}
            background='radial-gradient(circle, #25273D, #010316)'
            _hover={{
                transition: 'ease-in-out 0.2s',
                transform: 'scale(1.019)',
                cursor: 'pointer'
            }}
            >
            <MoreInformationButton quote={quote} />
            <Text color={'white'} fontSize={'20px'}>{quote.content}</Text>
            <Text color={'grey'} fontSize={'15px'}>- {quote.author}</Text>
            <SaveQuoteButton quote={quote} />
        </Flex>
    );

}


export default QuoteBox;