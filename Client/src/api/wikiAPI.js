
const apiUrl = "https://en.wikipedia.org/w/rest.php/v1/search/page?q=churchill";

export const WikiApi = () => {
  const fetchWikiData = async (name) => {
    try{
      const apiCall = `${apiUrl}${name}&limit=1`;
      const response = await fetch(apiCall);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const items = await response.json();
      console.log(items[0]);
    }catch(error){
      console.log(error);
    }
  }

  return{
    fetchWikiData,
  };
}
