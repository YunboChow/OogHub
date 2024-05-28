import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import SaveQuoteButton from './SaveQuote';
import MoreInformationButton from './QuoteInformation';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect"; 

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
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full w-full absolute inset-0 z-0" 
                    >
                        <CanvasRevealEffect
                            animationSpeed={0.4}
                            opacities={[0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]}
                            colors={[[0, 255, 255]]}
                            dotSize={3}
                            showGradient={true}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            
            
            <MoreInformationButton quote={quote} style={{ zIndex: 20 }} />
            <Text color={'white'} fontSize={'20px'} style={{ position: 'absolute', zIndex: 20 }}>{quote.content}</Text>
            <Text color={'grey'} fontSize={'15px'} style={{  zIndex: 20 }}>- {quote.author}</Text>
            <SaveQuoteButton quote={quote} style={{  zIndex: 20 }} />
        </Flex>
    )
}

export default QuoteBox;
