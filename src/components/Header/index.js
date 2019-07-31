import Header from './Header'
import {connect} from 'react-redux'
import {changeSearchTerm} from '../../actions/breedList'
import {withRouter} from 'react-router-dom'

function mapDispatchToProps(dispatch) {
  return {
    onSearchChange: searchTerm => dispatch(changeSearchTerm(searchTerm))
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.breedList.searchTerm
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
