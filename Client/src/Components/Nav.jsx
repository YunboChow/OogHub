import { Box, Button, Flex, IconButton, color } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from "react";

//todo fixa check on loading if quote is saved

function Nav({refresh}) {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <>
            <Box bgColor={'black'} w={'100%'} minH={'40px'} h="5%" mb={'1%'}>
                <Flex flexDir={'row'} justifyContent={'end'} alignItems={'center'} h="100%">
                    {<Button mr={'40px'} onClick={()=>refresh()}>Refresh</Button>}
                    <Button mr={'40px'}>Liked</Button>
                    <IconButton onClick={()=>setDarkMode(!darkMode)} mr={'20px'} icon={darkMode === false ? <SunIcon /> : <MoonIcon />}/>
                </Flex>
            </Box>
        </>
    );

}


export default Nav;