import './App.css';
import MainContainer from './containers/MainContainer';

// Redux
import { Provider } from 'react-redux';
  // Global Store
  import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
