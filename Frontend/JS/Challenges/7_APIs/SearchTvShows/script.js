// https://api.tvmaze.com/search/shows?q=dragon

const form = document.querySelector("#searchForm");
const root = document.querySelector("#root");

const renderImages = (shows) => {
    root.innerHTML = '';
  for (let s of shows) {
    if(s.show.image.medium) { // null / undefined === falsy.
        const img = document.createElement("IMG");
        img.src = `${s.show.image.medium}`;
        root.append(img);
    }
}
};

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // e = eventObject

  const searchQuery = form.elements.query.value;

  try {
    const config = { params: {q: searchQuery} }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    renderImages(res.data);
  } catch (err) {
    console.log("Error:", err);
  }

  form.reset();
});


// const form = document.querySelector("#searchForm");
// const root = document.querySelector("#root");

// const addImages = (shows) => {
//   for (let s of shows) {
//     if(s.show.image.medium) { // null / undefined === falsy.
//         const img = document.createElement("IMG");
//         img.src = `${s.show.image.medium}`;
//         root.append(img);
//     }
// }
// };

// form.addEventListener("submit", async (e) => {
//   // e = eventObject
//   e.preventDefault();

//   // console.dir(form);
//   const q = form.elements.query.value;

//   try {
//     const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${q}`);
//     addImages(res.data);
//   } catch (err) {
//     console.log("Error:", err);
//   }

//   // form.elements.query.value = "";
//   form.reset();
// });


/* Perfect Version
const form = document.querySelector("#searchForm");
const root = document.querySelector("#root");

const addImages = (shows) => {
  // Clear previous search results before appending new ones
  root.innerHTML = ""; 

  for (let s of shows) {
    // FIX: Added optional chaining (?.) to prevent crashes if 'image' is null
    if (s.show.image?.medium) { 
        const img = document.createElement("IMG");
        img.src = s.show.image.medium; // Template literal `${}` is not needed for a direct string
        root.append(img);
    } else {
        // Optional: Handle shows without posters with a placeholder
        const placeholder = document.createElement("div");
        placeholder.innerText = s.show.name;
        placeholder.className = "no-image-placeholder"; // Style this in your CSS
        root.append(placeholder);
    }
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault(); 

  const searchQuery = form.elements.query.value;

  // Prevent making empty API requests if user clicks submit on an empty input
  if (!searchQuery.trim()) return; 

  try {
    const config = { params: { q: searchQuery } };
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    addImages(res.data);
  } catch (err) {
    console.error("Error:", err);
  }

  form.reset();
});
*/