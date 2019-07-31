import BreedItem from './BreedItem'
import {connect} from 'react-redux'
import {fetchBreedImage} from '../../actions/breedList'

const mapStateToProps = (state, ownProps) => ({
  breed: state.breedList.breeds[ownProps.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchImage: () => dispatch(fetchBreedImage(ownProps.id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreedItem)
