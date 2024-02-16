function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cc");
    }, time);
  });
}

async function cc() {
  await wait(3000);
  const response = await fetch("https://api.github.com/users/HowToRiseUp");
  const data = await response.json();
  console.log(data);
}
cc();
