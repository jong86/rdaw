// @flow
import initialState from '../initialState';

export default (state: Object = initialState.mixer, action: Object): Object => {
  switch (action.type) {
    case 'DO_SOMETHING':
      return Object.assign({}, {
        key: action.value
      })

    default:
      return state
  }
}
