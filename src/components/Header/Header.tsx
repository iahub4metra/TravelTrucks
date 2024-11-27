import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import sprite from "../../../public/logo-travel-trucks.svg"
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link to='/'>
                    <svg width='136px' height="16px">
                        <use xlinkHref={`${sprite}#logo`}></use>
                    </svg>
                </Link>
                <Navigation/>
            </div>
        </header>
    );
}
 
export default Header;