import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage'
import BaiTapAlbum from './pages/BaiTapAlbum'
import DataBinding from './pages/DataBinding'
import HandleEvent from './pages/HandleEvent'
import ChangeNumber from './pages/StateDemo/ChangeNumber'
//css cho toàn ứng dụng
import './assets/css/index.css'
import StyleComponentDemo from './pages/StyleComponent/StyleComponentDemo'
import ChangeFontSize from './pages/StateDemo/ChangeFontSize'
import CarDemo from './pages/StateDemo/CarDemo'
import TinkerApp from './pages/StateDemo/TinkerApp'
import PropsDemo from './pages/PropsDemo/PropsDemo'
import RenderWithMap from './pages/PropsDemo/RenderWithMap'
import ProductList from './pages/PropsDemo/BTRenderProduct/ProductList'
import LiftingStateUpDemo from './pages/LiftingStateUpDemo/LiftingStateUpDemo'
import ExerciseCarStore from './pages/LiftingStateUpDemo/ExerciseCarStore'
import BaiTapGioHang from './pages/LiftingStateUpDemo/BaiTapGioHang/BaiTapGioHang'
import GetAllProductPage from './pages/Api/GetAllProductPage'
import ReactFormDemo from './pages/ReactFormDemo/ReactFormDemo'
import DemoFormikYup from './pages/ReactFormDemo/DemoFormikYup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import About from './pages/About'
import HeaderHome from './components/HeaderHome';
import AdminDashBoard from './pages/AdminPage/AdminDashBoard'
import AdminTemplate from './Templates/AdminTemplate'
import UserManagement from './pages/AdminPage/UserManagement'
import ProductManagement from './pages/AdminPage/ProductManagement'
import HomeTemplate from './Templates/HomeTemplate'
import DemoUserNavigate from './pages/HookRouting/DemoUseNavigate'
import Profile from './pages/Profile'
import ForgotPass from './pages/ForgotPass'
import Detail from './pages/Detail'
import Search from './pages/Search'
import CreateProduct from './pages/CreateProduct'
import EditProduct from './pages/EditProduct'


createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      {/* <HeaderHome /> */}
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<GetAllProductPage />} ></Route>
          <Route path='index' element={<HomePage />} ></Route>
          <Route path='data-binding' element={<DataBinding />}></Route>
          <Route path='change-carcolor' element={<CarDemo />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='cart' element={<BaiTapGioHang />}></Route>
          <Route path='demo-useNavigate' element={<DemoUserNavigate />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='forgot-pass' element={<ForgotPass />}></Route>
          <Route path='detail/:id' element={<Detail />}></Route>
          <Route path='search' element={<Search />}></Route>
        </Route>
      </Routes>
      <Routes>
        <Route path='admin' element={<AdminTemplate />}>
          <Route index element={<AdminDashBoard />}></Route>
          <Route path='users' element={<UserManagement />}></Route>
          <Route path='products' element={<ProductManagement />}>
          </Route>
          <Route path='products/addNew' element={<CreateProduct />}></Route>
          <Route path='products/edit/:id' element={<EditProduct />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <HomePage /> */}
    {/* <BaiTapAlbum /> */}
    {/* <h1>Hello cybersoft</h1> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent /> */}
    {/* <ChangeNumber /> */}
    {/* <StyleComponentDemo /> */}
    {/* <ChangeFontSize /> */}
    {/* <CarDemo /> */}
    {/* <TinkerApp /> */}
    {/* <PropsDemo /> */}
    {/* <RenderWithMap /> */}
    {/* <ProductList /> */}
    {/* <LiftingStateUpDemo /> */}
    {/* <ExerciseCarStore /> */}
    {/* <BaiTapGioHang /> */}
    {/* <GetAllProductPage /> */}
    {/* <ReactFormDemo /> */}
    {/* <DemoFormikYup /> */}
  </>
)
