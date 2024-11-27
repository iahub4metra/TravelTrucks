import clsx from "clsx";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Camper } from "../App/App.types";
import { PiMapTrifoldThin } from "react-icons/pi";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addFavCamper, deleteFavCamper } from "../../redux/campers/slice";
import { useSelector } from "react-redux";
import { selectFavCamers } from "../../redux/campers/selectors";

const CamperInnerDiv = ({ camper, s }: { camper: Camper, s: any }) => {
    
    const dispatch: AppDispatch = useDispatch()
    const favCampers = useSelector(selectFavCamers)

    const handleChange = (camper: Camper) => {
        const isFav = favCampers.find(favCamper => favCamper.id === camper.id)
        if (isFav) {
            dispatch(deleteFavCamper(camper))
            return
        }
        dispatch(addFavCamper(camper))
    }

    const isCamperFav = favCampers.some((favCamper) => favCamper.id === camper.id);

    return (
        <>
            <div className={s.upperContCard}>
                <h2>{camper.name}</h2>
                <div>
                    <p>€{camper.price.toFixed(2)}</p>
                    <button onClick={() => handleChange(camper)} className={s.btnFav}>
                        <CiHeart className={clsx(s.favIcon, {[s.favIconPressed]: isCamperFav,})} />
                    </button>
                </div>
                
            </div>
            <div className={s.ratingAndLocationCont}>
                <span><FaStar className={s.starIcon} />{camper.rating}({camper.reviews.length} {camper.reviews.length > 1 ? 'Reviews' : 'Review'})</span>
                <span><PiMapTrifoldThin /> {camper.location}</span>
            </div>
        </>
    );
}
 
export default CamperInnerDiv;