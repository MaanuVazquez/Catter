import BreedList from './BreedList'
import {connect} from 'react-redux'
import {fetchBreedList} from '../../actions/breedList'
import {normalizeBreeds} from '../../utils'

function mapStateToProps(state) {
  return {
    ...state.breedList,
    breeds: state.breedList.searchTerm
      ? filterBySearchTerm(state.breedList.searchTerm, state.breedList.breeds)
      : state.breedList.breeds
  }
}

function mapDistpachToProps(dispatch) {
  return {
    fetchBreeds: () => dispatch(fetchBreedList())
  }
}

function filterBySearchTerm(searchTerm, breedList) {
  return normalizeBreeds(
    Object.values(breedList).filter(breed => {
      return (
        breed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        breed.origin.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
  )
}

export default connect(
  mapStateToProps,
  mapDistpachToProps
)(BreedList)
