//todo: Change limit later 

export const quoteApi = () => {
  const getQuotes = async () => {
    try{
      const response = await fetch('https://api.quotable.io/quotes/random?limit=34');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const items = await response.json();
      console.log('items',items);
      return items;
    }catch(error){
      console.log(error);
    }
  }

  return{
    getQuotes,
  };
}


