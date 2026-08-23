# API & Website Reference

> **Quick Lookup:** APIs and websites explored while learning AJAX, APIs, JSON, `JSON.parse()`, `fetch()`, etc.

---

## 1. TVMaze API

**Website:**  
https://www.tvmaze.com/

**API Documentation / Base URL:**  
https://www.tvmaze.com/api

**API Base URL:**  
https://api.tvmaze.com/

**Example API:**  
https://api.tvmaze.com/search/shows?q=dragon

**What it does:**  
Searches for TV shows matching the search term.

### Query Parameter

`?q=dragon`

- `?q=` → query parameter
- `dragon` → value being searched

The value can be changed:

`?q=batman`  
`?q=naruto`  
`?q=office`

Example:

https://api.tvmaze.com/search/shows?q=naruto

### Multiple Query Parameters

When an API needs more than one query parameter, use `&` to separate them.

Example:

`https://example.com/api/products?category=phone&brand=samsung`

Here:

- `?category=phone` → first query parameter
- `&brand=samsung` → second query parameter
- `&` → separates multiple query parameters

Another example:

`https://example.com/api/products?category=phone&brand=samsung&price=50000`

This contains **three query parameters**:

- `category=phone`
- `brand=samsung`
- `price=50000`

### Remember

`?` → starts the query parameters

`&` → separates additional query parameters

Example:

`?key1=value1&key2=value2&key3=value3`

---

## 2. Cat Facts API

**Website / API Base URL:**  
https://catfact.ninja/

### Useful Endpoints

### `/fact`

Returns a random cat fact.

https://catfact.ninja/fact

### `/facts`

Returns multiple cat facts.

https://catfact.ninja/facts

### `/breeds`

Returns information about cat breeds.

https://catfact.ninja/breeds

> **Note:** `/face` is not a standard Cat Facts API endpoint.

---

## 3. Star Wars API (SWAPI)

**Website:**  
https://swapi.dev/

**API Base URL:**  
https://swapi.dev/api/

### Useful Resource Endpoints

`/people/`  
`/planets/`  
`/films/`  
`/species/`  
`/vehicles/`  
`/starships/`

### Examples

**People:**  
https://swapi.dev/api/people/1/

**Planets:**  
https://swapi.dev/api/planets/3/

**Starships:**  
https://swapi.dev/api/starships/9/

### Available Resources

**People:**  
https://swapi.dev/api/people/

**Planets:**  
https://swapi.dev/api/planets/

**Films:**  
https://swapi.dev/api/films/

**Species:**  
https://swapi.dev/api/species/

**Vehicles:**  
https://swapi.dev/api/vehicles/

**Starships:**  
https://swapi.dev/api/starships/

---

# Quick Reference

## Base URL

The common part of an API URL.

`https://api.tvmaze.com/`

↓

## Endpoint

The specific resource/path we want.

`search/shows`

↓

## Query Parameter

Additional information passed in the URL.

`?q=dragon`

### Complete Example

`https://api.tvmaze.com/search/shows?q=dragon`

- `https://api.tvmaze.com/` → Base URL
- `search/shows` → Endpoint
- `?q=dragon` → Query parameter

---

## Another Example

`https://swapi.dev/api/people/1/`

- `https://swapi.dev/api/` → Base URL
- `people/` → Resource / endpoint
- `1/` → Specific resource ID

---

# API URL Structure

A typical API URL can look like:

`https://example.com/api/users/123?active=true`

- `https://example.com/api/` → Base URL
- `users/` → Endpoint / resource
- `123` → Specific resource ID
- `?active=true` → Query parameter

Keep this structure in mind while learning `fetch()`, AJAX, APIs, and JSON.