export async function findByAlbumId (id) {
  const slug = await fetch('https://jsonplaceholder.cypress.io/photos?albumId=' + id)
  const res = await slug.json()
  return res
}