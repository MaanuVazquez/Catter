import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../utils/store'
import CatList from '../CatList'
import Header from '../Header'
import BreedList from '../BreedList'
import BreedDetails from '../BreedDetails'
import './global.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={BreedList} />
          <Route exact path="/cats" component={CatList} />
          <Route path="/:breedId" component={BreedDetails} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
