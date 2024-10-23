import { useSelector } from "react-redux";
import s from "./LocationsSelect.module.css"
import { campersSelector } from "../../redux/campers/selectors";


const LocationsSelect = () => {

    const campers = useSelector(campersSelector)

    const locations = [...new Set(campers.map(camper => camper.location))]

    return (
        <>  
            <label className={s.labelLocations} htmlFor="selectLocations">Location</label>
            <select name="locationsFilter" id="selectLocations">
                {locations.map((location, index) => (
                    <option value="location" key={index}>{location}</option>
                ))}
            </select>
        </>
        
    );
}
 
export default LocationsSelect;