import { Link } from "react-router-dom";
import s from "./Header.module.css"
import Navigation from "../Navigation/Navigation";


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link to='/'>
                    <svg width='136px' height="16px">
                        <use xlinkHref="../../../public/logo-travel-trucks.svg#logo"></use>
                    </svg>
                </Link>
                <Navigation/>
            </div>
        </header>
    );
}
 
export default Header;