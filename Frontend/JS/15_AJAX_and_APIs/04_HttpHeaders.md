# icanhazdadjoke API

**Website:**  
https://icanhazdadjoke.com/

**API Documentation:**  
https://icanhazdadjoke.com/api

**Random Joke API:**  
https://icanhazdadjoke.com/

### Response Format

The `Accept` request header tells the API which format we want.

`Accept: application/json` → JSON response

`Accept: text/plain` → Plain text response

**Default:** `text/html` → HTML response

Example in Postman:

`Headers → Accept → application/json`

or

`Headers → Accept → text/plain`

> `Accept` is a **request header**. It tells the server what response format the client prefers.

**No API key/authentication is required.**