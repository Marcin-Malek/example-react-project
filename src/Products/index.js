import { useParams, Link } from "react-router-dom";
import { useFetchProducts } from "../useFetchProducts";
import { useQuery } from "../useQuery";
import Pagination from "@mui/material/Pagination";
import PaginationItem from '@mui/material/PaginationItem';
import BasicTable from "./BasicTable";

const Products = () => {
    const { query } = useQuery("filter");
    const params = useParams();
    const page = parseInt(params.page);
    const [response, responseStatus] = useFetchProducts(page, query);

    switch (responseStatus) {
        case "loading":
            return <progress />

        case "success":
            const products = response.data instanceof Array ?
                response.data :
                [response.data];
            return (
                (products && products.length > 0 && (
                    <>
                        <BasicTable products={products} />
                        <Pagination
                            page={page}
                            count={response.total_pages}
                            renderItem={(item) => (
                                <PaginationItem
                                    component={Link}
                                    to={`/${item.page}`}
                                    {...item}
                                />
                            )}
                        />
                    </>
                )) || (
                    page > response.total_pages ? (
                        <>
                            <p>Page does not exist</p>
                            <Link to={"/1"}>Refresh Page</Link>
                        </>
                    ) : (
                        <p>No results found</p>
                    )
                )
            );

        default:
            return (
                <>
                    <p>Something went wrong</p>
                    <Link to={"/1"}>Refresh Page</Link>
                </>
            )

    }

}


export default Products;