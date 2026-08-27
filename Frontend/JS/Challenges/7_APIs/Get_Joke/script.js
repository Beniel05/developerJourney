// https://icanhazdadjoke.com/

const btn = document.querySelector("button");
const ul = document.querySelector("ul");

const addJoke = async () => {
  const joke = await getJoke();
  const li = document.createElement("li");
  li.textContent = joke;
  ul.append(li);
};

const getJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (err) {
    return err;
  }
};

btn.addEventListener("click", addJoke);

// btn.addEventListener("click", () => {
//   for (let i = 0; i < 50; i++) {
//     addJoke();
//   }
// });

// const btn = document.querySelector('button');
// const ul = document.querySelector('ul');

// const getJoke = async () => {
//     const config = { headers: { Accept: "application/json" } };
//     const res = await axios.get("https://icanhazdadjoke.com/", config);

//     const li = document.createElement('li');
//     li.textContent = res.data.joke;

//     li.style.backgroundColor = '#000';
//     li.style.color = '#fff';

//     ul.append(li);
// };

// btn.addEventListener('click', getJoke);
