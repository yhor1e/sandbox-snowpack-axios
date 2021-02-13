import axios from 'axios';

const b = document.getElementById('axios');
b.addEventListener('click', () => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});
