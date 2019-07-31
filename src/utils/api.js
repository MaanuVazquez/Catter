const {REACT_APP_CAT_API_KEY} = process.env
const API_URL = 'https://api.thecatapi.com/v1'

if (!REACT_APP_CAT_API_KEY) throw Error('There is no api key, kittens will be sad')

async function fetchCatAPI(route) {
  const response = await fetch(API_URL + route, {
    headers: {
      'x-api-key': REACT_APP_CAT_API_KEY
    }
  })

  return response.json()
}

export function fetchKittens(queryString) {
  return fetchCatAPI('/images/search?' + queryString)
}

export function fetchBreeds() {
  return fetchCatAPI('/breeds')
}

export async function fetchImageFromBreedId(id) {
  const imagesData = await fetchCatAPI(`/images/search?breed_ids=${id}`)
  return imagesData[0].url
}

export function fetchBreed(id) {
  return fetchCatAPI(`/breeds/${id}`)
}
