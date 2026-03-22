import { ACCESSTOKEN, DOMAIN } from "@/util/Config";
import { getLocalStorageString } from "@/util/storageUtil";
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
});

// xử lý lỗi response
axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response?.status == 401) {
        // localStorage.removeItem("userInfo");
        // window.location.href = "/login";
    } else if (error.response?.status == 400) {
        // window.location.href = "/notfound";
    }
    return Promise.reject(error);
});

export default axiosClient;