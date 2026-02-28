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
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import ProductAddNewEdit from './pages/ProductAddNewEdit'
import RenderCondition from './pages/RenderCondition'
import { Provider } from 'react-redux'
import store from './redux/store';
import DemoTinkerAppRedux from './pages/ReduxDemo/DemoTinkerAppRedux'
import DemoChangeCarRedux from './pages/ReduxDemo/DemoChangeCarRedux'
import DemoChangeNumberRedux from './pages/ReduxDemo/DemoChangeNumberRedux'
import BTXemChiTietRedux from './pages/ReduxDemo/BTXemChiTietRedux/BTXemChiTietRedux'
import BaiTapGioHangRedux from './pages/ReduxDemo/BTGioHangRedux/BTGioHangRedux'
import BTXucXacRedux from './pages/ReduxDemo/BTXucXacRedux/BTXucXacRedux'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route index element={<GetAllProductPage />} ></Route>
            <Route path='index' element={<HomePage />} ></Route>
            <Route path='album' element={<BaiTapAlbum />} ></Route>
            <Route path='data-binding' element={<DataBinding />}></Route>
            <Route path='handle-event' element={<HandleEvent />}></Route>
            <Route path='render-condition' element={<RenderCondition />}></Route>
            <Route path='change-number' element={<ChangeNumber />}></Route>
            <Route path='change-fontsize' element={<ChangeFontSize />}></Route>
            <Route path='style-component' element={<StyleComponentDemo />}></Route>
            <Route path='tinker-app' element={<TinkerApp />}></Route>
            <Route path='props-demo' element={<PropsDemo />}></Route>
            <Route path='change-carcolor' element={<CarDemo />}></Route>
            <Route path='render-with-map' element={<RenderWithMap />}></Route>
            <Route path='product-list' element={<ProductList />}></Route>
            <Route path='lifting-state-up' element={<LiftingStateUpDemo />}></Route>
            <Route path='exercise-car-store' element={<ExerciseCarStore />}></Route>
            <Route path='cart' element={<BaiTapGioHang />}></Route>
            <Route path='react-form' element={<ReactFormDemo />} ></Route>
            <Route path='react-formik-yup' element={<DemoFormikYup />} ></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='demo-useNavigate' element={<DemoUserNavigate />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='forgot-pass' element={<ForgotPass />}></Route>
            <Route path='detail/:id' element={<Detail />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='redux-changenumber' element={<DemoChangeNumberRedux />}></Route>
            <Route path='redux-changecar' element={<DemoChangeCarRedux />}></Route>
            <Route path='redux-tinkerapp' element={<DemoTinkerAppRedux />}></Route>
            <Route path='bt-xem-chi-tiet-redux' element={<BTXemChiTietRedux />}></Route>
            <Route path='bt-gio-hang-redux' element={<BaiTapGioHangRedux />}></Route>
            <Route path='bt-xuc-xac-redux' element={<BTXucXacRedux />}></Route>
            <Route path='*' element={<Navigate to='/' />}></Route>
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
            <Route path='product/:id?' element={<ProductAddNewEdit />}></Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
)
