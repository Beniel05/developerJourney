// <!-- This CDN is for browser - not for Node js and Code Runner -->
// To see the output. Include the CDN script and this js file to a HTML file - then check out the console by running the HTML file.

axios.get("https://swapi.dev/api/people/1/")
.then((res) => {
    // no need for res.json() while using AXIOS
  console.log(res.data);
})
.catch((err) => {
    console.log(err);
})

console.log('====== ASYNC =======');

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch(e) {
        console.log("Error:",e);
    }
}

getStarWarsPerson(6);
getStarWarsPerson(11);