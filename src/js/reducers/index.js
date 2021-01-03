import { combineReducers } from "redux"
import { sessionReducer } from 'redux-react-session';
import articles from "./articlesReducer"

const reducers = {
  articles: articles,
  session: sessionReducer
};

export default combineReducers(reducers)
