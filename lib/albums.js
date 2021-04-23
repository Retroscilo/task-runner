export async function findById(id) {
  const slug = await fetch('https://jsonplaceholder.cypress.io/albums?userId=' + id)
  let albums = await slug.json()
  const res = []
  for await (const album of albums) {
    const photoSlug = await fetch('https://jsonplaceholder.cypress.io/photos?albumId=' + album.id)
    const photos = await photoSlug.json()
    res.push({ ...album, photos })
  }
  
  return res 
}