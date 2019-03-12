const initialState = {
  title: 'title'
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_TITLE':
    let newState = JSON.parse(JSON.stringify(state))
    return newState

    default:
    return state
  }

}

export default reducer
