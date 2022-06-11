import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../useFetchProducts";
import { useQuery } from "../useQuery";

const Products = () => {
    const [products, setProducts] = useState();
    const { query } = useQuery("filter");
    const page = useParams().page;
    const [response, responseStatus] = useFetchProducts(page);

    useEffect(() => {
        if (responseStatus === "success") {
            if (!query) {
                setProducts(response.data);
            } else {
                setProducts(response.data.filter(product => product.id === parseInt(query)));
            }
        }
    }, [response, responseStatus, query])

    switch (responseStatus) {
        case "loading":
            return <progress />

        case "success":
            return (
                (products && products.length > 0) && (
                    <table>
                        <tbody>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>year</th>
                            </tr>
                            {
                                products.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.year}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            );

        default:
            return <p>Something went wrong</p>
    }

}


export default Products;