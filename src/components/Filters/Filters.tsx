import { useSelector } from "react-redux";
import s from "./Filters.module.css"
import { campersSelector } from "../../redux/campers/selectors";
import { Camper } from "../App/App.types";
import { chooseIcon } from "../../utils/chooseIcon";

const Filters = () => {

    const campers = useSelector(campersSelector);

    if (campers.length === 0) {
        return <p>No campers available.</p>;
    }

    const engineFilters = campers.map(filter => ({ key: 'engine', value: filter.engine }))
    
    const transmissionFilters = campers.map(filter => ({key: 'transmission', value: filter.transmission}))

    const arr = Object.keys(campers[0]).filter(key => {
            return typeof campers[0][key as keyof Camper] === "boolean"
        })

    const equipmentFilters = [
        ...new Set(engineFilters.map(filter => JSON.stringify(filter))),
        ...new Set(transmissionFilters.map(filter => JSON.stringify(filter)))
    ].map(item => JSON.parse(item))

    const booleanFilters = arr

    return (
        <div className={s.contFilters}>
            <h3>Filters</h3>
            <div>
                <h3>Vehicle equipment</h3>
                <ul className={s.equipmentFiltersList}>
                    {equipmentFilters.map((filter, index) => (
                        <li key={index} className={s.equipmentFiltersItem}>
                            <input type="checkbox" name="filter" onClick={()=> console.log(`${filter.key}=${filter.value}`)
                            } />
                            <div>
                                {chooseIcon(filter.value)}
                                <p className={s.sidebarFilter}>{filter.value.charAt(0).toUpperCase() + filter.value.slice(1)}</p>
                            </div>
                            
                        </li>
                    ))}
                    {booleanFilters.map((filter, index) => (
                        <li key={index} className={s.equipmentFiltersItem}>
                            <input type="checkbox" name="filters" onClick={()=> console.log(`${filter}=true`)
                            } />
                            <div>
                                {chooseIcon(filter)}
                                <p className={s.sidebarFilter}>{filter.charAt(0).toUpperCase() + filter.slice(1)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default Filters;