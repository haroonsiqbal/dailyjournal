const journalFetch = () => {
    return fetch("http://localhost:3000/entries") // Fetch from the API
    .then(data => data.json())  // Parse as JSON

  }

