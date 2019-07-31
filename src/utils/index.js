export function normalizeBreeds(breeds) {
  return breeds.reduce((accum, breed) => {
    accum[breed.id] = breed
    return accum
  }, {})
}
