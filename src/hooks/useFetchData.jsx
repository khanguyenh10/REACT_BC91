import { use, useEffect, useState } from "react"
import { toastPromise } from "../util/toast";
import { ref } from "yup";
import useRedux from "./useRedux";

//dủng 
const useFetchData = (fetchApiFunction, params) => {
    const [data, setData] = useState(null); // dùng fetch List hoặc detail 
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { useAppSelector } = useRedux();
    const { isLogined } = useAppSelector(state => state.userReducer);
    const getDataApi = async (customParams) => {
        const finalParams = customParams || params;
        try {
            setIsLoading(true);
            let response = await fetchApiFunction(finalParams);
            const content = response?.data?.content || null;
            setData(content);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getDataApi();
    }, [])

    return {
        data,
        isLoading,
        error,
        refecth: getDataApi
    };
}
export default useFetchData;