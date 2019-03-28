import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './App'

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/reducers'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
