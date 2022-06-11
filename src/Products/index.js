import { useParams } from "react-router-dom";
import { useFetchProducts } from "../useFetchProducts";

const Products = () => {
    const page = useParams().page;

    const [response, responseStatus] = useFetchProducts(page);

    switch (responseStatus) {
        case "loading":
            return <progress />

        case "success":
            const products = response.data;
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
                                    <tr>
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