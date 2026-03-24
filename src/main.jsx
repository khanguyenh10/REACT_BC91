import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { lazy } from 'react';
const HomeTemplate = lazy(() => import('./Templates/HomeTemplate'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Search = lazy(() => import('./pages/Search'));
const Detail = lazy(() => import('./pages/Detail'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Profile = lazy(() => import('./pages/Profile'));
const Carts = lazy(() => import('./pages/Carts'));
const ChangePassword = lazy(() => import('./pages/ChangePassword'));
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "react-toastify/dist/ReactToastify.css";
import "./assets/sass/main.scss";
import { ToastContainer } from 'react-toastify';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
createRoot(document.getElementById('root')).render(
  <>
    <HistoryRouter history={history}>
      <ToastContainer />
      <Provider store={store}>
        <Routes>
          <Route path="" element={<HomeTemplate />} >
            <Route index element={<Home />}></Route>
            {/* <Route path='men' element={<p>Men</p>}></Route> */}
            <Route path='search' element={<Search />}></Route>
            <Route path='detail/:id' element={<Detail />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='change-password' element={<ChangePassword />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='carts' element={<Carts />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </HistoryRouter>
  </>
)
