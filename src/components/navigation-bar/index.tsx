import { Link } from "react-router-dom";
import s from "./styles.module.css";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function NavigationBar() {
    return (
        <div className={`${s['container']} page-container`}>
            <div className="flex">
                <Link to="/">
                    <h2>Shop on React</h2>
                </Link>
                <div className={s['search-container']}>
                    <input></input>
                    <button>
                        <FaSearch color="white"/>
                    </button>
                </div>
            </div>

            <Link to="/cart">
                <button>
                    <FaShoppingCart color="white"/>
                </button>
            </Link>
        </div>
    );
}

export default NavigationBar;