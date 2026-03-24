# yêu cầu
https://apicrm.cybersoft.edu.vn/files/24-02-2026-06-44-55-06-09-2025-01-19-48-capstone-react.pdf
Giao diện:
Bao gồm 6 trang là index, search, detail, login, register, profile, carts 

# package cài đặt sử dụng
## REACT ROUTER DOM
```js
 npm install react-router-dom   
```
## REDUX TOOLKIT
```js
 npm install @reduxjs/toolkit react-redux
```
## AXIOS API
```
npm install axios
```
## Toastify
1. cài đặt
```
npm install react-toastify
```
2. sử dụng
```js
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// trong App
<ToastContainer />
```

## SASS
1. cài đặt
```js
npm install sass --save-dev
```
trong  `vite.config.js`
```js
npm install --save-dev @vitejs/plugin-react-refresh
npm install --save-dev vite-plugin-sass


import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import sassPlugin from 'vite-plugin-sass';

export default defineConfig({
  plugins: [reactRefresh(), sassPlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
});
```
2. Sử dụng
```scss
@import 'variables.scss';

.my-class {
  color: $primary-color;
}
```
## Lodash
```js
npm i lodash
```

## Day.js
1. install
```js
npm install dayjs
```
2. 
```js
dayjs(date).format('DD/MM/YYYY HH:mm');
```

## Swiper
1. cài đặt
```js
  npm i swiper
```
2. sử dụng
```jsx
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      {/* onSlideChange={() => console.log('slide change')} */}
      {/* onSwiper={(swiper) => console.log(swiper)} */}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
```
## Plugin tối ưu render ko cần dùng useMemo, useCallback, memo
1. install
```js
npm install -D babel-plugin-react-compiler
```
2. setup
``` js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler']
      }
    })
  ]
})
```
## History Router
tương ứng như useNavigate tuy nhiên nó sử dụng được ở những file ko phải component , như ở redux, file cấu hình router
1. Cài đặt
```js
npm i history
```
2. sử dụng
```js
import { unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
export const history = createBrowserHistory();

<HistoryRouter>
  <Routes>
    <Route path='' element={<p>HomeTemplate</p>}>
        <Route index element={<p>Home</p>}/>
    </Route>
  </Routes>
</HistoryRouter>
```