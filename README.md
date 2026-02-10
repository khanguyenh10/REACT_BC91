# REACT_BC91
Learn ReactJS, NextJs, Typescript

# Install ReactJs
```
npm create vite@latest
```

# Cấu trúc thư mục dự án
- node_modules: nơi chứa các thư viện thay vì phải download và tổ chức thư mục dự án
- package.json: Nơi cấu hình dự án 
  - cấu hình script chạy
    - npm run dev: chạy mt dev
    - npm run build: chạy mt ứng dụng -> dist -> đưa lên host
  - lưu trữ các thư viện và dependencies
- main.js file gốc của dự án dùng để code jsx hiển thị lên div#root
  - file này được ReactCompiler đóng gói -> dist
- .gitignore: loại bỏ những file ko muốn đưa lên git

# phím tắt
rasce
# tool
- Dùng để debug: React Developer Tools
- Convet html to jsx : html-to-jsx

# Note
- chia layout thì mình chia ở page, component cha , ko chia layout ở các component con vì nó có thể tái sử dụng

# package hỗ trợ

npm i lodash


# api 
https://apistore.cybersoft.edu.vn/swagger/index.html


# form package
npm i formik yup

# router dom
- npm i router dom
- nào kế thừa giao diện thì mới lồng ở trong
