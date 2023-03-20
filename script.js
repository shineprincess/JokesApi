// let btnJoke = document.getElementById('jokeBtn');
let jokes = document.querySelector('#joke');
let btnJoke = document.querySelector('#jokeBtn');

const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json"
      }
    }
    const res = await fetch('https://icanhazdadjoke.com', setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (err) {
    console.log(`the error is ${err}`);
  }
}

btnJoke.addEventListener('click', generateJokes);
generateJokes();