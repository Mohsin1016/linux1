function fetchData() {
  fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => {
      document.getElementById('data').innerText = data.message;
  })
  .catch(error => {
      document.getElementById('data').innerText = "Error fetching data";
  });
}
