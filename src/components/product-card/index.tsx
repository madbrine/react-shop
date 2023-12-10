import { FaCartPlus } from "react-icons/fa";
import { IProduct } from "../../types/IProduct";
import StarsRating from "../stars-rating";
import s from './styles.module.css';
import { salePrice } from "../../helpers/salePrice";

interface IProps {
    product: IProduct
}
function ProductCard({
    product
}: IProps) {
    return (
        <div className={s['container']}>
            <img
                src={product.thumbnail}
                className={s['image']}
            />
            <div className={s['sections']}>
                <div className={s['info']}>
                    <div className={s['text-info']}>
                        <div className="flex">
                            <span>{product.category}</span>
                            <span>{product.brand}</span>
                        </div>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                    <div className={s['rating-info']}>
                        <StarsRating rating={product.rating} />
                    </div>
                </div>
                <div className={s['right']}>
                    {
                        product.discountPercentage &&
                            product.discountPercentage !== 0
                            ?
                            <div>
                                <h3 className={s['old-price']}>
                                    ${product.price}
                                </h3>
                                <h2 className={s['new-price']}>
                                    ${salePrice(product.price, product.discountPercentage)}
                                </h2>
                                <span className={s['sale']}>SALE {product.discountPercentage}%</span>
                            </div>
                            :
                            <div>
                                <h3>${product.price}</h3>
                            </div>
                    }
                    <button><FaCartPlus />To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;