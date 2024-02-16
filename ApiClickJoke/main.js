// https://icanhazdadjoke.com/
const heading = document.querySelector(".heading");
const btn = document.querySelector(".btn");
const loading = document.querySelector(".loading");
const endpoint = "https://icanhazdadjoke.com";
async function getApy(endpoint) {
  const respoint = await fetch(endpoint, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await respoint.json();
  return data;
}

btn.addEventListener("click", handlClick);

async function handlClick(e) {
  btn.classList.add("is-loading");
  const data = await getApy(endpoint);
  heading.textContent = data.joke;
  btn.classList.remove("is-loading");
}
