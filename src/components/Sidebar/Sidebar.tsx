import { useDispatch } from "react-redux";
import Filters from "../Filters/Filters";
import LocationsSelect from "../LocationsSelect/LocationsSelect";
import s from "./Sidebar.module.css"
import { AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { filterSelector } from "../../redux/filters/selectors";
import { getCampers } from "../../redux/campers/operations";

const Sidebar = () => {

    const dispatch: AppDispatch = useDispatch()
    const filters = useSelector(filterSelector)

    const handleClick = async () => {
        dispatch(getCampers(filters))
    }

    return (
        <aside>
            <LocationsSelect />
            <Filters />
            <button className={s.btnSearch} type="button" onClick={()=> handleClick()}>Search</button>
        </aside>
    );
}
 
export default Sidebar;