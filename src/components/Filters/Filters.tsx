import { useSelector } from "react-redux";
import s from "./Filters.module.css"
import { campersSelector } from "../../redux/campers/selectors";
import { Camper } from "../App/App.types";
import { chooseIcon } from "../../utils/chooseIcon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { writeToTemplate } from "../../redux/filters/slice";
import { filterTemplateSelector } from "../../redux/filters/selectors";

const Filters = () => {

    const dispatch:AppDispatch = useDispatch()

    const templateFilters = useSelector(filterTemplateSelector)

    const campers = useSelector(campersSelector);

    if (campers.length === 0) {
        return <p>No campers available.</p>;
    }

    const engineFilters = campers.map(filter => ({ key: 'engine', value: filter.engine }))
    
    const transmissionFilters = campers.map(filter => ({ key: 'transmission', value: filter.transmission }))
    
    const typesFilter = campers.map(filter => ({key: 'form', value: filter.form}))

    const arr = Object.keys(campers[0]).filter(key => {
            return typeof campers[0][key as keyof Camper] === "boolean"
        })

    const equipmentFilters = [
        ...new Set(engineFilters.map(filter => JSON.stringify(filter))),
        ...new Set(transmissionFilters.map(filter => JSON.stringify(filter)))
    ].map(item => JSON.parse(item))

    const typeFilters = [
        ...new Set(typesFilter.map(filter => JSON.stringify(filter)))
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
                            <input
                                className={s.checkbox}
                                type="checkbox"
                                name="filter"
                                onClick={() => {
                                    if (!templateFilters.includes(`${filter.key}=${filter.value}`)) {
                                        dispatch(writeToTemplate(`${filter.key}=${filter.value}`))
                                    }
                                }
                            } />
                            <div>
                                {chooseIcon(filter.value, s.filtersIcon)}
                                <p className={s.sidebarFilter}>{filter.value.charAt(0).toUpperCase() + filter.value.slice(1)}</p>
                            </div>
                            
                        </li>
                    ))}
                    {booleanFilters.map((filter, index) => (
                        <li key={index} className={s.equipmentFiltersItem}>
                            <input
                                className={s.checkbox}
                                type="checkbox"
                                name="filters"
                                onClick={() => {
                                    if (!templateFilters.includes(`${filter}=true`)) {
                                        dispatch(writeToTemplate(`${filter}=true`))
                                    }
                                }
                                    
                            } />
                            <div>
                                {chooseIcon(filter, s.filtersIcon)}
                                <p className={s.sidebarFilter}>{filter.charAt(0).toUpperCase() + filter.slice(1)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Vehicle type</h3>
                <ul className={s.equipmentFiltersList}>
                    {typeFilters.map((filter, index) => (
                        <li key={index} className={s.equipmentFiltersItem}>
                            <input className={s.checkbox} type="checkbox" name="filters"  onClick={()=> {
                                    if (!templateFilters.includes(`${filter.key}=${filter.value}`)) {
                                        dispatch(writeToTemplate(`${filter.key}=${filter.value}`))
                                    }
                                }
                            } />
                            <div>
                                {chooseIcon(filter.value, "")}
                                <p className={s.sidebarFilter}>{
                                    filter.value === "fullyIntegrated" ? ("Full") :
                                    filter.value.charAt(0).toUpperCase() + filter.value.slice(1)
                                }</p>
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    );
}
 
export default Filters;