import { useLocation, useParams, Link } from "react-router-dom";

const Pagination = ({ pages }) => {
    const { page } = useParams();
    const { pathname } = useLocation();

    return (
        <>
            {page > 1 &&
                <Link to={pathname.replace(page, parseInt(page) - 1)}>
                    {"<"}
                </Link>
            }
            {page - pages !== 0 &&
                <Link to={pathname.replace(page, parseInt(page) + 1)}>
                    {">"}
                </Link>
            }
        </>
    );
}

export default Pagination;