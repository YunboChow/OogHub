import React, { useState, useEffect } from "react";
import {
  IconButton, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Image,
  Box,
  Img,
  Spinner,
  HStack,
  VStack
} from '@chakra-ui/react';
import { AddIcon, StarIcon, InfoIcon } from '@chakra-ui/icons';
import { WikiApi } from '../api/wikiAPI';

function MoreInformationButton({ quote }) {
  const { fetchWikiData } = WikiApi();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [authorInfo, setAuthorInfo] = useState(null);

  const getInfoAboutQuote = async (quote) => {
    const wikiAuthor = quote.authorSlug;
    onOpen();
    const authorInfo = await fetchWikiData(wikiAuthor);
    const changedURL = authorInfo.pages[0].thumbnail?.url.replace("60px", "400px");
    console.log(changedURL);
    setAuthorInfo({ authorDes: authorInfo.pages[0].description, url: changedURL });
  };



  return (
    <>
      <IconButton
        icon={<InfoIcon />}
        color={'white'}
        bgColor={'transparent'}
        position='absolute'
        bottom={2}
        left={3}
        onClick={() => getInfoAboutQuote(quote)}
      />

      <Modal isOpen={isOpen} onClose={() => onClose} isCentered={true} closeOnEsc={true} size={'4xl'}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
        <ModalContent>
          <ModalHeader>{quote.author}</ModalHeader>
          <ModalCloseButton onClick={() => onClose()} />
          <ModalBody >
            {/* <Button bgColor={'#A3D5FF'}>HEJHEJ</Button>
            <Button bgColor={'#FFD700'}>HEJHEJ</Button>
            <Button bgColor={'#F0E68C'}>HEJHEJ</Button>
            <Button bgColor={'#D4CBB8'}>HEJHEJ</Button>
            <Button bgColor={'#6E4F28'}>HEJHEJ</Button>
            <Button bgColor={'#8FAF77'}>HEJHEJ</Button> */}
            {authorInfo ? (
              <>
                <HStack>
                  <Img h={'400px'} src={authorInfo.url} />
                  <VStack>
                    <Text as={'i'}>{quote.content}</Text>
                    <Text as={'b'}>- {quote.author}</Text>
                    <Text mt={'5%'}>{authorInfo.authorDes}</Text>
                  </VStack>
                </HStack>

              </>
            ) : (
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => onClose()}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </>
  );

}


export default MoreInformationButton;