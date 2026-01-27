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

createRoot(document.getElementById('root')).render(
  <>
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
    <ExerciseCarStore />
  </>
)
