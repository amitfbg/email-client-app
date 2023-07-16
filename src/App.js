import { Provider } from 'react-redux';
import './App.css';
import EmailViewPage from './Pages/emailViewPage';
import store from './redux-store/store/configureStore';

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <EmailViewPage />
    </div>
    </Provider>
  );
}

export default App;
