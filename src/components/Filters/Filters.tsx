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

    const engineAndTransmFilters = [
        { key: 'engine', value: 'diesel' },
        { key: 'engine', value: 'petrol' },
        { key: 'engine', value: 'hybrid'},
        { key: 'transmission', value: 'automatic'},
        { key: 'transmission', value: 'manual' }
    ]

    const booleanFilters = ['AC', 'bathroom', 'kitchen', 'TV', 'radio', 'refrigerator', 'microwave', 'gas', 'water']

    const dispatch:AppDispatch = useDispatch()

    const templateFilters = useSelector(filterTemplateSelector)

    const campers = useSelector(campersSelector);

    if (campers.length === 0) {
        return <p>No campers available.</p>;
    }

    const typeFilters = [
        {key: 'form', value: 'alcove'},
        {key: 'form', value: 'fullyIntegrated'},
        {key: 'form', value: 'panelTruck'}
    ]

    return (
        <div className={s.contFilters}>
            <h3>Filters</h3>
            <div>
                <h3>Vehicle equipment</h3>
                <ul className={s.equipmentFiltersList}>
                    {engineAndTransmFilters.map((filter, index) => (
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
                                onChange={() => {
                                    if (!templateFilters.includes(`${filter}=true`)) {
                                        dispatch(writeToTemplate(`${filter}=true`))
                                        console.log(booleanFilters);
                                        
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
                            <input className={s.checkbox} type="radio" name="filters"  onClick={()=> {
                                    if (!templateFilters.includes(`${filter.key}=${filter.value}`)) {
                                        dispatch(writeToTemplate(`${filter.key}=${filter.value}`))
                                        console.log(typeFilters);
                                        
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