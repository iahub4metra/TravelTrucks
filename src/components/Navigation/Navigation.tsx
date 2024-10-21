import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css"

const buildingClass = ({ isActive } : {isActive: boolean}) => {
       return clsx(s.navLink, isActive && s.activeNavLink)
    }

const Navigation = () => {
    return (
        <nav className={s.navContainer}>
            <NavLink
                className={buildingClass}
                to='/'
            >
                Home
            </NavLink>
            <NavLink
                className={buildingClass}
                to="/catalog"
            >
                Catalog
            </NavLink>
        </nav>
    );
}
 
export default Navigation;