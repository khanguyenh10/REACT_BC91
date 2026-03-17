import { use, useEffect, useState } from "react"
import { toastPromise } from "../util/toast";
import { ref } from "yup";
import useRedux from "./useRedux";

//dủng 
const useFetchData = (fetchApiFunction, isCheckLogined = false) => {
    const [data, setData] = useState(null); // dùng fetch List hoặc detail 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { useAppSelector } = useRedux();
    const { isLogined } = useAppSelector(state => state.userReducer);
    const getDataApi = async () => {
        try {
            setIsLoading(true);
            let response = await fetchApiFunction();
            const content = response?.data?.content || null;
            setData(content);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        if (isCheckLogined && !isLogined) return;
        getDataApi();
    }, [isLogined, isCheckLogined])

    return {
        data,
        isLoading,
        error,
        refecth: getDataApi
    };
}
export default useFetchData;