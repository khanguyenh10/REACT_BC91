import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

const useRouting = () => {
    const params = useParams(); // lấy tham số /:tham số
    const [searchParams, setSearchParams] = useSearchParams(); // lấy tham số /?a=1&b=2
    const navigate = useNavigate(); // chuyển trang
    const location = useLocation(); // dùng khi lúc create hay edit

    return {
        params,
        searchParams,
        setSearchParams,
        navigate,
        location
    }

}
export default useRouting