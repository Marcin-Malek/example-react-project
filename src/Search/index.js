import { useQuery } from "../useQuery";

const Search = () => {
    const {query, setQuery} = useQuery("filter");

    const onInputChange = ({ target }) => {
        setQuery({
            key: "filter",
            value: target.value.trim() !== "" ?
                target.value :
                undefined,
        });
    };

    return (
        <input
            type="number"
            value={query || ""}
            onChange={onInputChange}
        />
    );
}

export default Search;