import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./assets/sass/main.scss";

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="" element={<HomeTemplate />} >
            <Route index element={<Home />}></Route>
            {/* <Route path='men' element={<p>Men</p>}></Route> */}
            <Route path='search' element={<Search />}></Route>
            <Route path='detail/*' element={<Detail />}></Route>
            <Route path='login' index element={<Login />}></Route>
            <Route path='register' index element={<Register />}></Route>
            <Route path='profile' index element={<Profile />}></Route>
            <Route path='carts' index element={<Carts />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>

  </>
)
