import { toast } from "react-toastify";

export const toastPromise = (promise, message = 'Xử lý') => {
    return toast.promise(promise, {
        pending: `${message}...`,
        success: `${message} thành công`,
        error: {
            render({ data }) {
                let messageError = data?.response.data.message;
                // data chính là error
                return messageError ? messageError : data?.message;
            }
        }
    });
};
export const toastError = (data) => {
    let messageError = data?.response.data.message;
    toast.error(messageError ? messageError : data?.message);
};
