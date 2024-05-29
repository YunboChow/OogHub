import { Box, Button, Flex, IconButton, color, Text, Image } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion'

function Nav({ refresh, setQuotes, setRefreshedQuotes }) {
    const [darkMode, setDarkMode] = useState(true);

    const button = {
        rest: { scale: 1 },
        hover: { scale: 1.1 },
        pressed: { scale: 0.95 }
    };

    return (
        <>
            <Box bgColor={'#BEAFFC'} w={'100%'} minH={'40px'} h="5%" mb={'1%'} bgGradient={'linear(to-r,blue.400,purple.400,,pink.700)'}>
                <Flex flexDir={'row'} justifyContent={'end'} alignItems={'center'} h="100%">
                    <Image src={window.location.origin + '/assets/TheOog.png'} alt="Oog" paddingLeft={"10px"} maxHeight="50px" onClick={() => setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || [])} cursor={"pointer"} />
                    <Text alignContent={'center'} h={'100%'} fontSize={'30px'} ml={'10px'} width={'100%'}>OOGHUB</Text>
                    {/* TODO: REMOVE THIS BUTTON AND MAKE TEXT CLICKABLE */}
                    <Button as={motion.div} variants={button} initial="rest" whileHover="hover" whileTap="pressed" mr={'40px'} onClick={() => setQuotes(JSON.parse(localStorage.getItem('previousQuotes')) || [])} bgColor={'transparent'}>HOME</Button>
                    <Button as={motion.div} variants={button} initial="rest" whileHover="hover" whileTap="pressed" mr={'40px'} onClick={() => refresh()}>Refresh</Button>
                    <Button as={motion.div} variants={button} initial="rest" whileHover="hover" whileTap="pressed" mr={'40px'} onClick={() => { setQuotes(JSON.parse(localStorage.getItem('savedQuotes')) || []); setRefreshedQuotes(false) }}>Liked</Button>
                    <IconButton onClick={() => setDarkMode(!darkMode)} mr={'20px'} icon={darkMode === false ? <SunIcon /> : <MoonIcon />} />
                </Flex>
            </Box>
        </>
    );

}

export default Nav;