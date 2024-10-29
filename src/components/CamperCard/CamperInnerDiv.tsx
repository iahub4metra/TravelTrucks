import { FaStar } from "react-icons/fa";
import { Camper } from "../App/App.types";
import { PiMapTrifoldThin } from "react-icons/pi";

const CamperInnerDiv = ({camper, s}: {camper: Camper, s: any}) => {
    return (
        <>
            <div className={s.upperContCard}>
                <h2>{camper.name}</h2>
                <p>€{camper.price.toFixed(2)}</p>
            </div>
            <div className={s.ratingAndLocationCont}>
                <span><FaStar className={s.starIcon} />{camper.rating}({camper.reviews.length} {camper.reviews.length > 1 ? 'Reviews' : 'Review'})</span>
                <span><PiMapTrifoldThin /> {camper.location}</span>
            </div>
        </>
    );
}
 
export default CamperInnerDiv;