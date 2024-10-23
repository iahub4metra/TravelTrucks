import { useSelector } from "react-redux";
import s from "./LocationsSelect.module.css"
import { campersSelector } from "../../redux/campers/selectors";
import { PiMapTrifoldThin } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

const LocationsSelect = () => {

    const campers = useSelector(campersSelector)

    const locations = [...new Set(campers.map(camper => camper.location))]

    return (
        <div className={s.contSelectLocations}>  
            <label className={s.labelLocations} htmlFor="selectLocations">Location</label>
            <select className={s.selectLocations} name="locationsFilter" id="selectLocations">
                {locations.map((location, index) => (
                    <option value="location" key={index}>{location}</option>
                ))}
            </select>
            <PiMapTrifoldThin className={s.iconLocations} />
            <IoIosArrowDown className={s.iconArrowDownLocations} />
        </div>
        
    );
}
 
export default LocationsSelect;