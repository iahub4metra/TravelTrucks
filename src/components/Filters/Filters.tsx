import { useSelector } from "react-redux";
import s from "./Filters.module.css"
import { campersSelector } from "../../redux/campers/selectors";
import { Camper } from "../App/App.types";
import { chooseIcon } from "../../utils/chooseIcon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deleteFromTemplate, joinFilters, writeToTemplate } from "../../redux/filters/slice";
import { filterTemplateSelector } from "../../redux/filters/selectors";
import { useState } from "react";

const Filters = () => {

    const [selectedRadio, setSelectedRadio] = useState<String | null>(null)

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

    const toggleFilters = (filterString: string) => {
        if (templateFilters.includes(filterString)) {
            dispatch(deleteFromTemplate(filterString))
        } else {
            dispatch(writeToTemplate(filterString))
            dispatch(joinFilters())
        }
    }

    const toggleRadio = (filter: { key: string, value: string }) => {
        const filterString = `${filter.key}=${filter.value}`

        if (templateFilters.includes(filterString)) {
            dispatch(deleteFromTemplate(filterString))
        } else {
            templateFilters
                .filter(f => f.startsWith(`${filter.key}=`))
                .forEach(existingFilter => dispatch(deleteFromTemplate(existingFilter)));
            dispatch(writeToTemplate(filterString))
            dispatch(joinFilters())
        }   
    }

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
                                type="radio"
                                name={filter.key}
                                checked={templateFilters.includes(`${filter.key}=${filter.value}`)}
                                readOnly={true}
                                onClick={() => {
                                        toggleRadio(filter)                                       
                                    
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
                                        toggleFilters(`${filter}=true`)                                          
                                    
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
                            <input
                                className={s.checkbox}
                                type="radio"
                                name="filters"
                                checked={templateFilters.includes(`${filter.key}=${filter.value}`)}
                                readOnly={true}
                                onClick={() => {
                                        toggleRadio(filter) 
                                    } 
                                }
                            />
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