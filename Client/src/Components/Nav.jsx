import React, { useState} from "react";
import {
    Box, 
    Button, 
    Flex, 
    IconButton, 
    useBreakpointValue,
    Text, 
    Image,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion'
import BurgerPanel from './BurgerPanel';

function Nav({ refresh, setQuotes, setRefreshedQuotes }) {
    const [darkMode, setDarkMode] = useState(true);
    const screenSize = useBreakpointValue({ base: true, lg: false, },)

    const button = {
        rest: { scale: 1 },
        hover: { scale: 1.1 },
        pressed: { scale: 0.95 }
    };

    return (
        <>
            {screenSize ? (
                <>
                    <Box bgColor={'#BEAFFC'} w={'100%'} minH={'50px'} h="5%" mb={'1%'} bgGradient={'linear(to-r,blue.400,purple.400,,pink.700)'}>
                        <Flex flexDir={'row'} justifyContent={'space-evenly'} alignItems={'center'} h="100%">
                            <div style={{ width: '80%' }}>
                                <Image src={window.location.origin + '/assets/TheOog.png'} alt="Oog" paddingLeft={"10px"} maxHeight="50px" onClick={() => setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || [])} cursor={"pointer"} />
                            </div>
                            <IconButton m={'1%'} onClick={() => setDarkMode(!darkMode)} mr={'20px'} icon={darkMode === false ? <SunIcon /> : <MoonIcon />} />
                            <BurgerPanel refresh={refresh} setQuotes={setQuotes} setRefreshedQuotes={setRefreshedQuotes} />
                        </Flex>
                    </Box>

                </>
            ) : (
                <>
                    <Box bgColor={'#BEAFFC'} w={'100%'} minH={'40px'} h="5%" mb={'1%'} bgGradient={'linear(to-r,blue.400,purple.400,,pink.700)'}>
                        <Flex flexDir={'row'} justifyContent={'end'} alignItems={'center'} h="100%">
                            <Image src={window.location.origin + '/assets/TheOog.png'} alt="Oog" paddingLeft={"10px"} maxHeight="50px" onClick={() => setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || [])} cursor={"pointer"} />
                            <Text alignContent={'center'} h={'100%'} fontSize={'30px'} ml={'10px'} width={'100%'}>OOGHUB</Text>
                            <Button as={motion.div} variants={button} initial="rest" whileHover="hover" whileTap="pressed" mr={'40px'} onClick={() => setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || [])} bgColor={'transparent'}>HOME</Button>
                            <Button as={motion.div} variants={button} initial="rest" whileHover="hover" whileTap="pressed" mr={'40px'} onClick={() => refresh()}>Refresh</Button>
                            <Button as={motion.div} variants={button} initial="rest" whileHover="hover" whileTap="pressed" mr={'40px'} onClick={() => { setQuotes(JSON.parse(localStorage.getItem('savedQuotes')) || []); setRefreshedQuotes(false) }}>Liked</Button>
                            <IconButton onClick={() => setDarkMode(!darkMode)} mr={'20px'} icon={darkMode === false ? <SunIcon /> : <MoonIcon />} />
                        </Flex>
                    </Box>
                </>
            )}

        </>
    );

}

export default Nav;