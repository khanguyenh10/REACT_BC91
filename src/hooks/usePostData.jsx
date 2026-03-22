import { useState } from "react";

const usePostData = (postApiFunction) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const mutate = async (payload) => {
        try {
            setIsLoading(true);
            const response = await postApiFunction(payload);
            const content = response?.data?.content || null;
            setData(content);
            console.log('vasdsa');
        } catch (err) {
            console.log('error', err);
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return { mutate, isLoading, error, data };
};
export default usePostData;