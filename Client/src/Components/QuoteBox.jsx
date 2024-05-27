"use client";
import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import SaveQuoteButton from './SaveQuote';
import MoreInformationButton from './QuoteInformation';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect"; // Adjust the path as necessary

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
                transition: 'ease-in-out 0.2s',
                transform: 'scale(1.019)',
                cursor: 'pointer'
            }}
        >
            <MoreInformationButton quote={quote} />
            <Text color={'white'} fontSize={'20px'}>{quote.content}</Text>
            <Text color={'grey'} fontSize={'15px'}>- {quote.author}</Text>
            <SaveQuoteButton quote={quote} />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full w-full absolute inset-0"
                    >
                        <CanvasRevealEffect
                            animationSpeed={5}
                            containerClassName="bg-transparent"
                            colors={[
                                [59, 130, 246],
                                [139, 92, 246],
                            ]}
                            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                            dotSize={2}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </Flex>
    );
}

export default QuoteBox;
