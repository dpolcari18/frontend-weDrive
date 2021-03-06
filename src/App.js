import './App.css';

// containers
import MainContainer from './containers/MainContainer';

// Redux
import { Provider } from 'react-redux';

// images
import background from './images/background.jpg'

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
