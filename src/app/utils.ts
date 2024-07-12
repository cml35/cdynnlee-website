/**
 * GET a resource from an API with JSON response
 *
 * @param {string} url
 * @param {string} token
 * @returns {Promise<object>}
 */
export const get = async (url: string) => {
  const API_KEY = "NnmR8qMqoLmshVDm2gj6m7JOwDnxp1SkO4qjsnH1xykY";
  const API_HOST = "medium2.p.rapidapi.com";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": API_HOST,
      "x-rapidapi-key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`GET request failed: ${response.statusText}`);
  }

  return response.json();
};
