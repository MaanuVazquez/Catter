import {connect} from 'react-redux'
import BreedDetails from './BreedDetails'
import {fetchBreedById, fetchBreedImage} from '../../actions/breedList'

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.breedId
  return {
    id,
    breed: state.breedList.breeds[id],
    loading: state.breedList.loading,
    error: state.breedList.error
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const id = ownProps.match.params.breedId
  return {
    fetchBreed: () => dispatch(fetchBreedById(id)),
    fetchBreedImage: () => dispatch(fetchBreedImage(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreedDetails)
