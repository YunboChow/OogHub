import {
    Box, Button, Flex, IconButton, useBreakpointValue, color, Text, Image,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    background,
    VStack,
    Center,
} from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion'

function BurgerPanel({ refresh, setQuotes, setRefreshedQuotes }) {
    const [darkMode, setDarkMode] = useState(true);
    const ref = useRef(null);
    const screenSize = useBreakpointValue({ base: true, lg: false, },)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const button = {
        rest: { scale: 1 },
        hover: { scale: 1.1 },
        pressed: { scale: 0.95 }
    };

    return (
        <>
            <IconButton ref={ref} onClick={onOpen} icon={<ArrowLeftIcon />} />


            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={ref}
                closeOnOverlayClick={true}
            >
                <DrawerOverlay />
                <DrawerContent style={{ background: '#2D3748' }}>
                    <DrawerCloseButton color={'#ffffff'}/>
                    <DrawerHeader color={'#ffffff'} >OogHub</DrawerHeader>

                    <DrawerBody w={'100%'} justifyContent={'center'}>
                        <VStack w={'100%'} spacing={8} justifyContent={'center'} alignItems={'center'}>
                            <Button w={'70%'} initial="rest" whileHover="hover" whileTap="pressed" onClick={() => { setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || []), onClose() }}>HOME</Button>
                            <Button w={'70%'} initial="rest" whileHover="hover" whileTap="pressed" onClick={() => { refresh(), onClose() }}>Refresh</Button>
                            <Button w={'70%'} initial="rest" whileHover="hover" whileTap="pressed" onClick={() => { setQuotes(JSON.parse(localStorage.getItem('savedQuotes')) || []), onClose(); setRefreshedQuotes(false) }}>Liked</Button>
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' color={'grey'} mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );

}

export default BurgerPanel;