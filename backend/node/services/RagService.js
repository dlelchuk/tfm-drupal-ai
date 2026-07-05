async function search(query) {
  const response = await fetch(
    `http://python-api:8000/search?query=${encodeURIComponent(query)}`,
  );

  if (!response.ok) {
    throw new Error(`Error en python-api: ${response.status}`);
  }

  return await response.json();
}

module.exports = {
  search,
};