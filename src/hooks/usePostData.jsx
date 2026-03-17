import { useState } from "react";

const usePostData = (postApiFunction) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const mutate = async (payload) => {
        try {
            setIsLoading(true);
            const response = await postApiFunction(payload);
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return { mutate, isLoading, error, data };
};
export default usePostData;