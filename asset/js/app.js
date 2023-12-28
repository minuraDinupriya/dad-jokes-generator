const btnEl=document.getElementById("btn");

const apiKey="vpOdUSK6odOrmbmoNc1zEw==he9DhuyK3ZD7lAHS";

const options={
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    const response=await fetch(apiUrl, options);
    const data=await response.json();
    console.log(data);
}

btnEl.addEventListener("click",getJoke);