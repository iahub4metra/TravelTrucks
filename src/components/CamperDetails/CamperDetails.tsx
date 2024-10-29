import { useSelector } from "react-redux";
import { camperSelector } from "../../redux/campers/selectors";
import CamperInnerDiv from "../CamperCard/CamperInnerDiv";
import s from "./CamperDetails.module.css"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import FeaturesComponent from "../FeaturesComponent/FeaturesComponent";
import Reviews from "../Reviews/Reviews";
import Form from "../Form/Form";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";


const CamperDetails = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [activeHash, setActiveHash] = useState(location.hash)
    const camper = useSelector(camperSelector)


    useEffect(() => {
        if (!location.hash) {
            navigate("#features", { replace: true });
        }
        setActiveHash(location.hash)
    }, [location.hash, navigate]);

    return (
        <div>
            {!camper ? <Loader /> : (
                <>
                    <CamperInnerDiv camper={camper} s={s} />
                    <ul className={s.galleryList}>
                        {camper.gallery.map((photo, index) => (
                            <li key={index}>
                                <img src={photo.thumb} alt="" />
                            </li>
                        ))}
                    </ul>
                    <p>{camper.description}</p>
                    <div className={s.navCont}>
                            <NavLink className={clsx(s.navLink, activeHash === "#features" && s.activeNavLink)} to="#features"><h3>Features</h3></NavLink>
                            <NavLink className={clsx(s.navLink, activeHash === "#reviews" && s.activeNavLink)} to="#reviews"><h3>Reviews</h3></NavLink>
                       </div>
                    <div className={s.lowerBox}>
                        <div className={s.contWithReviewsOrDetails}>
                            {location.hash === "#reviews" ? <Reviews camper={camper}/> : <FeaturesComponent camper={camper} />}
                        </div>
                        <Form/>
                    </div>
                </>
            )}
            
        </div>
    );
}
 
export default CamperDetails;
