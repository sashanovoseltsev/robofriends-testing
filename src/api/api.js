export const apiCallAsync = async (link) => {
  const response = await fetch(link);
  if (response.ok)
    return await response.json();

  throw new Error(await response.text());
}