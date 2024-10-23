import { useSelector } from "react-redux";
import s from "./Filters.module.css"
import { campersSelector } from "../../redux/campers/selectors";
import { Camper } from "../App/App.types";

const Filters = () => {

    const campers = useSelector(campersSelector);

    const arr = Object.keys(campers[0]).filter(key => {
            return typeof campers[0][key as keyof Camper] === "boolean"
        })

    const equipmentFilters = [
        ...new Set(campers.map(camper => camper.engine)),
        ...new Set(campers.map(camper => camper.transmission)),
        ...arr
    ]

    return (
        <div className={s.contFilters}>
            <h3>Filters</h3>
            <div>
                <h3>Vehicle equipment</h3>
                <ul className={s.equipmentFiltersList}>
                    {equipmentFilters.map((filter, index) => (
                        <li key={index}>
                            <p className={s.sidebarFilter}>{filter}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default Filters;