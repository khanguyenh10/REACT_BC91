import { toast } from "react-toastify";

let id;

export const showLoading = () => {
    id = toast.loading("Đang đăng nhập...", {
        // position: "top-center",
    });
}
export const showStatusSuccess = (message = 'Xử lý') => {
    toast.update(id, {
        render: `${message} Thành công`,
        type: "success",
        isLoading: false,
        autoClose: 2000
    });
}
export const showStatusError = (message = 'Xử lý') => {
    toast.update(id, {
        render: `${message} Thất bại`,
        type: "error",
        isLoading: false,
        autoClose: 2000
    });
}
