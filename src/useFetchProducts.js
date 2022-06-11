import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchProducts = (page, id) => {
    const [response, setResponse] = useState({
        data: null,
        status: "loading"
    });

    useEffect(() => {
        setResponse({ status: "loading" });
        const fetchData = async () => {
            try {
                if (id) {
                    const axiosResponse = await axios.get(`https://reqres.in/api/products/?per_page=5&id=${id}`);
                    setResponse({
                        data: axiosResponse.data,
                        status: "success"
                    });
                } else {
                    const axiosResponse = await axios.get(`https://reqres.in/api/products/?per_page=5&page=${page || 1}`);
                    setResponse({
                        data: axiosResponse.data,
                        status: "success"
                    });
                }
            } catch (error) {
                setResponse({
                    data: [],
                    status: "failure"
                });
            }
        }

        fetchData();
    }, [page, id])

    return [response.data, response.status];
}