import { history } from "@/main";
import { ACCESSTOKEN, DOMAIN, USERLOGIN } from "@/util/config";
import { getLocalStorageString, removeLocalStorage } from "@/util/storageUtil";
import axios from "axios";

// thiết lập các giá trị mặc địng cho axios
const axiosClient = axios.create({
    baseURL: DOMAIN,
    timeout: 3000 // nếu server ko trả dữ liệu trong 5 giây sẽ báo lỗi
})

// chỉ gắn token khi token tồn tại
axiosClient.interceptors.request.use((config) => {
    const accessToken = getLocalStorageString(ACCESSTOKEN);

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

// xử lý lỗi response
axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log('Error in response interceptor:', error);
    console.log('Error response status:', error.response?.status);
    if (error.response?.status == 401) {
        // history.push('/login');
        removeLocalStorage(ACCESSTOKEN);
        removeLocalStorage(USERLOGIN);
        window.location.href = '/login';
    } else if (error.response?.status == 400 || error.response?.status == 404) {
        // history.push('/notfound');
        window.location.href = '/notfound';
    }
    return Promise.reject(error);
});

export default axiosClient;