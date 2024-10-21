import { Camper } from "../App/App.types";
import s from "./CamperCard.module.css"
import { FaStar } from "react-icons/fa";
import { PiMapTrifoldThin } from "react-icons/pi";
const CamperCard = ({ camper }: { camper: Camper }) => {
    
    const camperFilters = Object.keys(camper).filter(key => {
        return camper[key as keyof Camper] === true
    })

    return (
        <div className={s.innerCard}>
            <img className={s.imageCamper} src={camper.gallery[0].thumb} alt={camper.description} />
            <div>
                <h2>{camper.name}</h2>
                <p>€{camper.price.toFixed(2)}</p>
                <span><FaStar className={s.starIcon} />{camper.rating}({camper.reviews.length} {camper.reviews.length > 1 ? 'Reviews' : 'Review'})</span>
                <span><PiMapTrifoldThin /> {camper.location}</span>
                <p className={s.camperDesc}>{camper.description}</p>
                <ul className={s.camperFilterList}>
                    <li>
                        <p className={s.camperFilter}>{camper.transmission.charAt(0).toUpperCase() + camper.transmission.slice(1)}</p>
                    </li>
                    <li>
                        <p className={s.camperFilter}>{camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}</p>
                    </li>
                    {camperFilters.map(filter => (
                        <li key={filter}><p className={s.camperFilter}>{filter.charAt(0).toUpperCase() + filter.slice(1)}</p></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default CamperCard;