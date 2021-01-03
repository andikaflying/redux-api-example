import axios from "axios";

export function fetchArticles() {
  return function(dispatch) {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({type: "FETCH_ARTICLES", payload: response.data})
      })
      .catch((err) => {
      })
  }
}
