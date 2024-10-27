import s from "./LocationsSelect.module.css"
import { PiMapTrifoldThin } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deleteFromTemplate, joinFilters, writeToTemplate } from "../../redux/filters/slice";
import { useSelector } from "react-redux";
import { filterTemplateSelector } from "../../redux/filters/selectors";

const LocationsSelect = () => {
    const dispatch: AppDispatch = useDispatch()
    const templateFilters = useSelector(filterTemplateSelector)
    const locations = ['Ukraine, Kyiv', 'Ukraine, Poltava', 'Ukraine, Dnipro', 'Ukraine, Odesa', 'Ukraine, Kharkiv', 'Ukraine, Sumy', 'Ukraine, Lviv']

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const location = e.target.value;

        if (templateFilters.includes(location)) {
            dispatch(deleteFromTemplate(location))
        } else {
            templateFilters
                .filter(f => f.startsWith("location="))
                .forEach(existingFilter => dispatch(deleteFromTemplate(existingFilter)));
            dispatch(writeToTemplate(location))
            dispatch(joinFilters())
        }
    }

    return (
        <div className={s.contSelectLocations}>  
            <label className={s.labelLocations} htmlFor="selectLocations">Location</label>
            <select className={s.selectLocations} name="locationsFilter" id="selectLocations" onChange={handleChange}>
                <option value="">Select location</option>
                {locations.map((location, index) => (
                    <option value={`location=${location}`} key={index}>{location}</option>
                ))}
            </select>
            <PiMapTrifoldThin className={s.iconLocations} />
            <IoIosArrowDown className={s.iconArrowDownLocations} />
        </div>
        
    );
}
 
export default LocationsSelect;