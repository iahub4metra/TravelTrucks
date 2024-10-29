import { Link } from "react-router-dom";
import { Camper } from "../App/App.types";
import s from "./CamperCard.module.css"
import Features from "./Features";
import CamperInnerDiv from "./CamperInnerDiv";
const CamperCard = ({ camper }: { camper: Camper }) => {
    
    const camperFilters = Object.keys(camper).filter(key => {
        return camper[key as keyof Camper] === true
    })

    return (
        <div className={s.innerCard}>
            <img className={s.imageCamper} src={camper.gallery[0].thumb} alt={camper.description} />
            <div>
                <CamperInnerDiv camper={camper} s={s} />
                <p className={s.camperDesc}>{camper.description}</p>
                <Features camper={camper}/>
                <Link to={`/catalog/${camper.id}`}>Show More</Link>
            </div>
        </div>
    );
}
 
export default CamperCard;