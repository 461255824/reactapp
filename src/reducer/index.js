let data = {
    number:0
}
const reducer = function counter(state = data, action) {
    switch (action.type) {
    case 'INCREMENT':
      console.log('INCREMENT---->'+(state + 1))
      return {
          ...state,
          number:action.data
      };
    case 'DECREMENT':
      console.log('INCREMENT---->'+(state - 1))
      return {
        ...state,
        number:state.number-1
    };
    default:
      return state;
    }
  }
export default reducer