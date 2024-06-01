import { useState,useRef } from 'react';
import {
    Button,IconButton, 
    useBreakpointValue,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
} from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

function BurgerPanel({ refresh, setQuotes, setRefreshedQuotes }) {
    const ref = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure()


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
                            <Button w={'70%'} onClick={() => { setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || []), onClose() }}>HOME</Button>
                            <Button w={'70%'} onClick={() => { refresh(), onClose() }}>Refresh</Button>
                            <Button w={'70%'} onClick={() => { setQuotes(JSON.parse(localStorage.getItem('savedQuotes')) || []), onClose(); setRefreshedQuotes(false) }}>Liked</Button>
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