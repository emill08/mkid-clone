import {
  RouterProvider
} from "react-router-dom";
import router from './routes/router'
import { Provider } from 'react-redux';
import store from '../src/stores/store'


function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
