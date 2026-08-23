console.log('============= QUICK LOOKUP ================');

const baseUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd";

// That API's value
const jsonDataFromBaseUrl =
  '{"bitcoin":{"usd":77380},"ethereum":{"usd":2439.35},"solana":{"usd":94.79}}';

const jsonObject = JSON.parse(jsonDataFromBaseUrl);
console.log(jsonObject);
/*
{
  bitcoin: { usd: 77380 },
  ethereum: { usd: 2439.35 },
  solana: { usd: 94.79 }
}
*/

/* 
JSON.parse() converts: JSON string  →  JavaScript object
Syntax: JSON.parse(jsonString)
*/

// --------------------------------------------------
// 1. JSON data received from an API
// --------------------------------------------------

const jsonData =
    '{"bitcoin":{"usd":77380},"ethereum":{"usd":2439.35},"solana":{"usd":94.79}}';


// --------------------------------------------------
// 2. Before parsing
// --------------------------------------------------

console.log("========== BEFORE JSON.parse() ==========");

console.log("jsonData:", jsonData);
console.log("Type:", typeof jsonData);


// --------------------------------------------------
// 3. Parse the JSON string
// --------------------------------------------------

const obj = JSON.parse(jsonData);


// --------------------------------------------------
// 4. After parsing
// --------------------------------------------------

console.log("\n========== AFTER JSON.parse() ==========");

console.log("obj:", obj);
console.log("Type:", typeof obj);


// --------------------------------------------------
// 5. Accessing the parsed data
// --------------------------------------------------

console.log("\n========== ACCESSING DATA ==========");

console.log("Bitcoin:", obj.bitcoin.usd);
console.log("Ethereum:", obj.ethereum.usd);
console.log("Solana:", obj.solana.usd);
