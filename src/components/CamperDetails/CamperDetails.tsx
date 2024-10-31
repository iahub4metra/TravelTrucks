import { useSelector } from "react-redux";
import { camperSelector } from "../../redux/campers/selectors";
import CamperInnerDiv from "../CamperCard/CamperInnerDiv";
import s from "./CamperDetails.module.css"
import FeaturesComponent from "../FeaturesComponent/FeaturesComponent";
import Reviews from "../Reviews/Reviews";
import Form from "../Form/Form";
import clsx from "clsx";
import { useState } from "react";
import Loader from "../Loader/Loader";


const CamperDetails = () => {

    const [activeTab, setActiveTab] = useState("features")
    const camper = useSelector(camperSelector)

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
                            <button className={clsx(s.navLink, activeTab === "features" && s.activeNavLink)} onClick={()=> setActiveTab("features")}><h3>Features</h3></button>
                            <button className={clsx(s.navLink, activeTab === "reviews" && s.activeNavLink)} onClick={()=> setActiveTab("reviews")}><h3>Reviews</h3></button>
                       </div>
                    <div className={s.lowerBox}>
                        <div className={s.contWithReviewsOrDetails}>
                            {activeTab === "reviews" ? <Reviews camper={camper}/> : <FeaturesComponent camper={camper} />}
                        </div>
                        <Form/>
                    </div>
                </>
            )}
            
        </div>
    );
}
 
export default CamperDetails;
