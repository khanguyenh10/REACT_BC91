import axios from "axios";
import { useEffect, useState } from "react";

const useHomePage = () => {
    const [arrProduct, setArrayProduct] = useState([
        {
            "sizes": [
                32,
                33,
                34,
                35
            ],
            "id": 2,
            "name": "vans old school",
            "alias": "vans-old-school",
            "price": 200,
            "description": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
            "size": "[32,33,34,35]",
            "shortDescription": "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "quantity": 200,
            "deleted": false,
            "categories": "[{\"id\": \"VANS_CONVERSE\",\"category\":\"VANS_CONVERSE\"}]",
            "relatedProducts": "[3,2,1]",
            "feature": true,
            "image": "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
            "imgLink": "https://apistore.cybersoft.edu.vn/images/van-old-school.png"
        }]);


    const getAllProductApi = async () => {
        try {

            const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product`);

            setArrayProduct(res.data.content);
            console.log(res.data.content)
        } catch (err) {
            console.log(err)
        }
    }
    //useEffect dùng để làm gì? Cho mấy trường hợp
    //TH1: dependency mảng rỗng: chạy 1 lần duy nhất khi component khởi xong html => tương tự window onload  (thường dùng cho các api get all)

    useEffect(() => {
        //Cài đặt hàm khi component khởi tạo xong html thì thực thi
        getAllProductApi();
    }, []); //dependency : tham số phụ thuộc 
    return { arrProduct };
}
export default useHomePage;


// quản lý logic dữ liệu component