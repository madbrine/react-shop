import { IProduct } from "../../types/IProduct";
import ProductCard from "../product-card";

interface IProps {
    products: IProduct[]
}
function ProductList({products}: IProps) {
    return (
        <div>
            {
            products.map((product: IProduct) => {
                return (
                    <div key={product.id}>
                        <ProductCard product={product}/>
                    </div>
                )
            })
            }
        </div>
    );
}

export default ProductList;