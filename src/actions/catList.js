export const CAT_LIST_FETCH = 'catListFetch'
export const CAT_LIST_FETCH_ERROR = 'catListFetchError'
export const CAT_LIST_FETCH_SUCCESS = 'catListFetchSuccess'

export const catListFetch = queryString => ({
  type: CAT_LIST_FETCH,
  payload: queryString
})

export const catListFetchSuccess = catList => ({
  type: CAT_LIST_FETCH_SUCCESS,
  payload: catList
})

export const catListFetchError = error => ({
  type: CAT_LIST_FETCH_ERROR,
  payload: error.message
})
