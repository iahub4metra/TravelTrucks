import { Link } from "react-router-dom";
import { Camper } from "../App/App.types";
import s from "./CamperCard.module.css"
import { FaStar } from "react-icons/fa";
import { PiMapTrifoldThin } from "react-icons/pi";
import { chooseIcon } from "../../utils/chooseIcon";
import Features from "./Features";
const CamperCard = ({ camper }: { camper: Camper }) => {
    
    const camperFilters = Object.keys(camper).filter(key => {
        return camper[key as keyof Camper] === true
    })

    return (
        <div className={s.innerCard}>
            <img className={s.imageCamper} src={camper.gallery[0].thumb} alt={camper.description} />
            <div>
                <div className={s.upperContCard}>
                    <h2>{camper.name}</h2>
                    <p>€{camper.price.toFixed(2)}</p>
                </div>
                <div className={s.ratingAndLocationCont}>
                    <span><FaStar className={s.starIcon} />{camper.rating}({camper.reviews.length} {camper.reviews.length > 1 ? 'Reviews' : 'Review'})</span>
                    <span><PiMapTrifoldThin /> {camper.location}</span>
                </div>
                <p className={s.camperDesc}>{camper.description}</p>
                <Features camper={camper}/>
                <Link to="/catalog/:camperId">Show More</Link>
            </div>
        </div>
    );
}
 
export default CamperCard;