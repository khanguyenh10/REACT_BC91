import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./assets/sass/main.scss";
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Carts from './pages/Carts';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="" element={<HomeTemplate />} >
            <Route index element={<Home />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='detail' element={<Detail />}></Route>
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
