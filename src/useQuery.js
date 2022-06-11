import { useLocation, useNavigate } from "react-router-dom";

export const useQuery = (param) => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(param);
    const setQuery = ({ key, value }) => {
        value ?
            searchParams.set(key, value)
            :
            searchParams.delete(key);
        navigate(`${location.pathname}?${searchParams.toString()}`);
    }

    return {
        query,
        setQuery
    };
}