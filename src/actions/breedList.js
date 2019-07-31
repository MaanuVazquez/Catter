export const FETCH_BREED_LIST = 'fetchBreedList'
export const FETCH_BREED_LIST_SUCCESS = 'fetchBreedListSuccess'
export const FETCH_BREED_LIST_ERROR = 'fetchBreedListError'
export const FETCH_BREED_IMAGE = 'fetchBreedImage'
export const FETCH_BREED_IMAGE_SUCCESS = 'fetchBreedImageSuccess'
export const FETCH_BREED_IMAGE_ERROR = 'fetchBreedImageError'
export const FETCH_BREED_BY_ID = 'fetchBreedById'
export const FETCH_BREED_BY_ID_SUCCESS = 'fetchBreedByIdSuccess'
export const FETCH_BREED_BY_ID_ERROR = 'fetchBreedByIdError'
export const CHANGE_SEARCH_TERM = 'changeBreedSearchTerm'

export const fetchBreedList = () => ({
  type: FETCH_BREED_LIST
})

export const fetchBreedListSuccess = breedList => ({
  type: FETCH_BREED_LIST_SUCCESS,
  payload: breedList
})

export const fetchBreedListError = error => ({
  type: FETCH_BREED_LIST_ERROR,
  payload: error.message
})

export function fetchBreedImage(id) {
  return {
    type: FETCH_BREED_IMAGE,
    payload: id
  }
}

export function fetchBreedImageSuccess(id, breedImage) {
  return {
    type: FETCH_BREED_IMAGE_SUCCESS,
    payload: {
      id,
      image: breedImage
    }
  }
}

export function fetchBreedImageError(id, error) {
  return {
    type: FETCH_BREED_IMAGE_ERROR,
    payload: {
      id,
      error
    }
  }
}

export const fetchBreedById = id => ({
  type: FETCH_BREED_BY_ID,
  payload: id
})

export const fetchBreedByIdSuccess = (id, breed) => ({
  type: FETCH_BREED_BY_ID_SUCCESS,
  payload: {
    id,
    breed
  }
})

export const fetchBreedByIdError = (id, error) => ({
  type: FETCH_BREED_BY_ID_ERROR,
  payload: {
    id,
    error
  }
})

export const changeSearchTerm = (term) => ({
  type: CHANGE_SEARCH_TERM,
  payload: term
})