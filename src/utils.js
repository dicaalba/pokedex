function fetcher(url) {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    response.json();
  });
}

export default { fetcher };