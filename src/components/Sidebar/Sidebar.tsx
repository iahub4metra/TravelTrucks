import Filters from "../Filters/Filters";
import LocationsSelect from "../LocationsSelect/LocationsSelect";

const Sidebar = () => {
    return (
        <aside>
            <LocationsSelect />
            <Filters/>
        </aside>
    );
}
 
export default Sidebar;