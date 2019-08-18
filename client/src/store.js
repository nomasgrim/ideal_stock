import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { init as websocketInit, emit } from './websockets/init'
import rootReducer from './reducers/rootReducer'

const initialState = {}

export default function startUp () {
  const middleware = [ thunk.withExtraArgument({ emit }) ]

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )

  websocketInit(store) // setup websocket listeners etc

  return store
}
