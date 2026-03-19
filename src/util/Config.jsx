import axios from "axios";

//hẳng số
export const DOMAIN = 'https://apistore.cybersoft.edu.vn/api';
export const ACCESSTOKEN = 'accessToken';
export const USERLOGIN = 'userLogin';
// Viết các hàm sử dụng localstorage và các hằng số

const saveLocalStorageString = (name, value) => {
    localStorage.setItem(name, value);
}

const getLocalStorageString = (name) => {
    if (localStorage.getItem(name)) {
        return localStorage.getItem(name);
    };
    return null;
}


const saveLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

const getLocalStorage = (name) => {
    const data = localStorage.getItem(name);
    if (data) {
        return JSON.parse(data);
    }
    return null;
}
const removeStore = (name) => {
    localStorage.removeItem(name);
}

// viết hàm lưu cookie
const saveCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
const removeCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export { saveLocalStorage, getLocalStorage, saveLocalStorageString, getLocalStorageString, removeStore, saveCookie, getCookie, removeCookie };


// cấu hình interceptor cho axios để tự động thêm token vào header mỗi khi gọi api

export const httpClient = axios.create({
    baseURL: DOMAIN,
    timeout: 30000, // sau 5 phút mà chưa có phản hồi thì sẽ tự động hủy request
    headers: {
        'Content-Type': 'application/json'
    }
});
httpClient.interceptors.request.use(config => {
    const token = getLocalStorageString(ACCESSTOKEN);
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.data = { ...config.data, abc: '123' }
    }
    return config;
}, error => {
    if (error.response.status === 401) {
        //Xử lý lỗi xác thực, có thể là token hết hạn hoặc không có token
        alert('Cần phải đăng nhập mới vào được!');
        history.push('/login');
    }
    return Promise.reject(error);
}
);

//statuscode
/*
    200: success thành công
    201: created tạo mới thành công (thường dùng 200 cho tất cả các trường hợp thành công, nhưng nếu muốn phân biệt rõ ràng thì có thể dùng 201 cho tạo mới)

    400: Bad request lỗi client gửi tham số không hợp lệ (tìm trong csdl không có trên backend thì trả về 400)

    404: Not found không tìm thấy tài nguyên (tìm trong csdl có nhưng đã bị xóa thì trả về 404)

    401: Unauthorized lỗi xác thực (gửi lên mà không có token hoặc token hết hạn thì trả về 401) - chưa đăng nhập nên không gọi được api đó (token hết hạn, token fake, không có token)

    403: Forbidden lỗi phân quyền (đăng nhập rồi nhưng không có quyền truy cập vào api đó thì trả về 403) - có đăng nhập nhưng chưa đủ quyền

    500: Internal server error lỗi từ phía server (lỗi code, lỗi server, lỗi database,...) - lỗi xảy ra trên server nhưng chưa xử lý nguyên nhân có thể do frontend gửi dữ liệu không hợp lệ mà backend chưa có code xử lý, hoặc do lỗi logic backend 
    => Đối với FE dev thì nên trao đổi nhỏ nhẹ với BE để tìm cách giải quyết vấn đề tuy nhiên kiểm tra bằng postman truóc hoặc swagger
    



*/