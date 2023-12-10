import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import s from './styles.module.css';
interface IProps {
    rating: number
}
function StarsRating({ rating }: IProps) {
    const maxRating = 5;
    const renderStars = () => {
        const stars = [];

        for (let i = 1; i <= maxRating; i++) {
            if (i <= rating || (i - 0.5 >= 0.5 && i - 0.5 <= rating)) {
                stars.push(<FaStar key={i} />);
            } else if (i - 0.5 >= rating && i - 0.9 <= rating) {
                stars.push(<FaStarHalfAlt key={i} />);
            } else {
                stars.push(<FaRegStar key={i} />);
            }
        }

        return stars;
    };
    return (
        <div className={s['stars']}>{renderStars()} {rating}</div>
    );
}

export default StarsRating;