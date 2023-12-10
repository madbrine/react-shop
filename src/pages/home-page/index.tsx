import ProductList from "../../components/product-list";
import { useGetProductsQuery } from "../../store/products/products.api";
import { IProduct } from "../../types/IProduct";

function HomePage() {
    const {isLoading, isError, data} = useGetProductsQuery();

    console.log(data)
    return (
    <div className="page-container">
        {isLoading &&
            "Loading ..."
        }
        {data &&
        <ProductList products={data.products}/>
        }
        {isError &&
            "Error"
        }
    </div>
    );
}

export default HomePage;