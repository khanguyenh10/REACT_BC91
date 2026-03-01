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
