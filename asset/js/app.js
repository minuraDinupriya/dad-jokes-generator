const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "vpOdUSK6odOrmbmoNc1zEw==he9DhuyK3ZD7lAHS";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerHTML = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";

    const response = await fetch(apiUrl, options);
    const data = await response.json();
    jokeEl.innerHTML = data[0].joke;

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";

  } catch(error) {
    jokeEl.innerHTML = "An error occcured... try again later";
    
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
  }
}

btnEl.addEventListener("click", getJoke);
