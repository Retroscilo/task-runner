export async function findByAlbumId (id) {
  const slug = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
  const res = await slug.json()
  return res
}