import { chooseIcon } from "../../utils/chooseIcon";
import { Camper } from "../App/App.types";
import s from "./CamperCard.module.css"
const Features = ({ camper, classNameCont }: { camper: Camper, classNameCont?: string}) => {
    
    const camperFilters = Object.keys(camper).filter(key => {
        return camper[key as keyof Camper] === true
    })

    const listClassName = classNameCont ? classNameCont : s.camperFilterList

    return (
        <ul className={listClassName}>
            <li>    
                {chooseIcon(camper.transmission, s.camperCardFeaturesIcon)}
                <p className={s.camperFilter}>{camper.transmission.charAt(0).toUpperCase() + camper.transmission.slice(1)}</p>
            </li>
            <li>
                {chooseIcon(camper.engine, s.camperCardFeaturesIcon)}
                <p className={s.camperFilter}>{camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}</p>
            </li>
            {camperFilters.map(filter => (
                <li key={filter}>
                    {chooseIcon(filter, s.camperCardFeaturesIcon)}
                    <p className={s.camperFilter}>{filter.charAt(0).toUpperCase() + filter.slice(1)}</p>
                </li>
            ))}
         </ul>
    );
}
 
export default Features;