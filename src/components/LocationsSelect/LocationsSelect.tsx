import s from "./LocationsSelect.module.css"
import { PiMapTrifoldThin } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { writeToTemplate } from "../../redux/filters/slice";

const LocationsSelect = () => {
    const dispatch: AppDispatch = useDispatch()

    const locations = ['Ukraine, Kyiv', 'Ukraine, Poltava', 'Ukraine, Dnipro', 'Ukraine, Odesa', 'Ukraine, Kharkiv', 'Ukraine, Sumy', 'Ukraine, Lviv']

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const location = e.target.value;
        dispatch(writeToTemplate(location))        
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