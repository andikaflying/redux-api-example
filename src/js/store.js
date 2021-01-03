import { applyMiddleware, createStore } from "redux"
//Untuk ngelog
import logger from "redux-logger"
//Redux Thunk middleware allows you to write action creators that return a function instead of an action.
import thunk from "redux-thunk"
/* Redux promise middleware enables robust handling of async code in Redux.
   The middleware enables optimistic updates and dispatches pending, fulfilled and rejected actions.
*/
import promise from "redux-promise-middleware"

import reducer from "./reducers"
//software that acts as a bridge between an operating system or database and applications,
const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)
