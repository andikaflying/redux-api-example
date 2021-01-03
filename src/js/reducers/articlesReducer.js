export default function reducer(state = {
    content: [],
    fetching: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ARTICLES": {
        return {...state, fetching: true, content: action.payload}
      }
    }

    return state
}
