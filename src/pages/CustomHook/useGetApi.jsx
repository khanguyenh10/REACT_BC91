import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useGetApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        if (!url) return;

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (err) {
            setError(err.response?.data?.message || err.message || "API Error");
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return {
        data,
        loading,
        error,
        refetch: fetchData
    };
}