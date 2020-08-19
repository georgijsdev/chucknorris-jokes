document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input').value;
  
  if (!number) return undefined;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let joke = [];

      if (response.type === 'success') {
        joke += response.value.map(e => `<li>${e.joke}</li>`).join('');
      } else {
        joke += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = joke;
 
    };
  }

  xhr.send();

  e.preventDefault();
}

