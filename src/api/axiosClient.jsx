import axios from "axios";

// thiết lập các giá trị mặc địng cho axios
const axiosClient = axios.create({
    baseURL: 'https://shop.cyberlearn.vn/api',
    timeout: 3000 // nếu server ko trả dữ liệu trong 5 giây sẽ báo lỗi
})
export default axiosClient;