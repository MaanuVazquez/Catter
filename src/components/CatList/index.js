import CatList from './CatList'
import {connect} from 'react-redux'
import {catListFetch} from '../../actions/catList'

function mapDispatchToProps(dispatch, ownProps) {
  let queryString = `limit=${ownProps.max || 20}`
  if (ownProps.breedId) queryString += `&breed_id=${ownProps.breedId}`
  return {
    fetchCats: () => dispatch(catListFetch(queryString))
  }
}

function mapStateToProps(state) {
  return {
    ...state.catList,
    cats: state.catList.cats.map(cat => {
      return cat.url
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatList)
