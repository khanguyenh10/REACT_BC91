import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage'
import BaiTapAlbum from './pages/BaiTapAlbum'
import DataBinding from './pages/DataBinding'
import HandleEvent from './pages/HandleEvent'

createRoot(document.getElementById('root')).render(
  <>
    {/* <HomePage /> */}
    {/* <BaiTapAlbum /> */}
    {/* <h1>Hello cybersoft</h1> */}
    {/* <DataBinding /> */}
    <HandleEvent />
  </>
)
