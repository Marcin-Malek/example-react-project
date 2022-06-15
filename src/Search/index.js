import { useQuery } from "../useQuery";

const Search = () => {
    const {query, setQuery} = useQuery("filter");

    const onInputChange = ({ target }) => {
        if(!/^[0-9]*$/.test(target.value)) {
            return;
        }
        setQuery({
            key: "filter",
            value: target.value !== "" ?
                target.value :
                undefined,
            });
    };

    return (
        <input
            value={query || ""}
            onChange={onInputChange}
        />
    );
}

export default Search;