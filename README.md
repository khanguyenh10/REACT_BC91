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