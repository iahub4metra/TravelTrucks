import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Filters from "../Filters/Filters";
import LocationsSelect from "../LocationsSelect/LocationsSelect";
import { AppDispatch } from "../../redux/store";
import { filterSelector, selectIsOpen } from "../../redux/filters/selectors";
import { getCampers } from "../../redux/campers/operations";
import { openSidebar } from "../../redux/filters/slice";
import s from "./Sidebar.module.css"

const Sidebar = () => {

    const isOpen = useSelector(selectIsOpen)
    const dispatch: AppDispatch = useDispatch()
    const filters = useSelector(filterSelector)

    const handleClick = async () => {
        dispatch(openSidebar())
        dispatch(getCampers(filters))
    }

    return (
        <>
            <aside className={clsx(s.sidebar, {[s.sidebarOpen]: isOpen})}>
                <LocationsSelect />
                <Filters />
                <button className={s.btnSearch} type="button" onClick={()=> handleClick()}>Search</button>
            </aside>
        </>
        
    );
}
 
export default Sidebar;