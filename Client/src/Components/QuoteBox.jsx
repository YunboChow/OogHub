import { useState, useEffect, useRef } from 'react';
import { Grid, GridItem, Box, Flex, Text, Button, IconButton, position, Img } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import SaveQuoteButton from './SaveQuote';
import MoreInformationButton from './QuoteInformation';
import { motion, useInView, useAnimation } from 'framer-motion';

function QuoteBox({ quote, index }) {
    const ref = useRef(null);
    const gridItemInView = useInView(ref);
    const controls = useAnimation();
    const slide = useAnimation();
    useEffect(() => {
        if (gridItemInView) {
            controls.start('visible');
            slide.start('visible');
        }
    }, [gridItemInView]);



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
        <GridItem ref={ref} key={index} colSpan={getRandomSpanColumn(index)} rowSpan={getRandomSpanRow(index)}>
            <motion.div
                style={{ height: '100%', width: '100%' }}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={controls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
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
                    <motion.div
                        variants={{
                            hidden: { left: 0 },
                            visible: { left: '100%' },
                        }}
                        initial='hidden'
                        animate={slide}
                        transition={{ duration: 1, delay: 0.05 }}
                        style={{
                            position: 'absolute',
                            top: 4,
                            bottom: 4,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(45deg, #25273D, #010316)',
                            zIndex: 20,
                        }}
                    />
                </Flex>
            </motion.div>

        </GridItem>
    );

}

export default QuoteBox;
