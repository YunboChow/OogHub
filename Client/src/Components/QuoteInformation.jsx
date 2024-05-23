import { IconButton } from '@chakra-ui/react';
import { AddIcon, StarIcon,InfoIcon } from '@chakra-ui/icons';
import React, {useState, useEffect} from "react";
import { WikiApi } from '../api/wikiAPI';

function MoreInformationButton({ quote }){
    const { fetchWikiData } = WikiApi();

    const getInfoAboutQuote = async (quote) => {
        const wikiAuthor = quote.authorSlug;
        const authorInfo = await fetchWikiData(wikiAuthor);
        console.log(authorInfo);
        const authorDescription = authorInfo.pages[0].description;
        const authorURL = authorInfo.pages[0].thumbnail.url;
      };

      

  return (
    <IconButton
      icon={<InfoIcon/> }
      color={'white'}
      bgColor={'transparent'}
      position='absolute'
      bottom={2}
      left={3}
      onClick={() => getInfoAboutQuote(quote)}
    />
  );

}


export default MoreInformationButton;