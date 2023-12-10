import { useGetProductsQuery } from "../../store/products/products.api";

function HomePage() {
    const {isLoading, isError, data} = useGetProductsQuery()
    return (
    <div>
        home page
    </div>
    );
}

export default HomePage;