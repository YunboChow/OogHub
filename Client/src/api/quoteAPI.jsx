fetch('https://api.quotable.io/quotes/random?limit=10')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data);
  //todo: handle the data here
})
.catch(error => {
  console.error('Fetch error:', error);
});