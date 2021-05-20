import {BrowserRouter, Route} from 'react-router-dom'
import ChatComponent from "./components/ChatComponent";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import {reducer} from './redux/reducers'
import {apiMiddleWare} from './redux/apiMiddleWare'
import thunk from 'redux-thunk'
const store = createStore(reducer, applyMiddleware(apiMiddleWare, thunk))

function App() {
  return (
      <Provider store={store}>
            <BrowserRouter>
              <Route path='/' exact component={ChatComponent} />
            </BrowserRouter>
      </Provider>
  );
}
export default App;
