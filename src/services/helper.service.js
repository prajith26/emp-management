const BASE_URL = "http://localhost:8080/";

export async function get(endpoint, options = {}) {
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);

  //handle error

  return await response.json;
}
