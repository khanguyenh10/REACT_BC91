import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage'
import "./assets/css/style.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </BrowserRouter>

  </>
)
