import { useQuery } from "../useQuery";
import { Input, Wrapper } from "./styled";

const Search = () => {
    const { query, setQuery } = useQuery("filter");

    const onInputChange = ({ target }) => {
        if (!/^[0-9]*$/.test(target.value)) {
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
        <Wrapper>
            <Input
                value={query || ""}
                placeholder="Search"
                onChange={onInputChange}
            />
        </Wrapper>
    );
}

export default Search;