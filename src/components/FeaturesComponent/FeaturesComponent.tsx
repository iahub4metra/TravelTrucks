import { Camper } from "../App/App.types";
import Features from "../CamperCard/Features";
import s from "./FeaturesComponent.module.css"

type CamperKeys = "form" | "length" | "width" | "height" | "tank" | "consumption";

const keys: CamperKeys[] = ["form","length", "width", "height", "tank", "consumption"]


const FeaturesComponent = ({camper}: {camper: Camper}) => {
    
    return (
        <div className={s.featuresContOuter}>
            <Features classNameCont={s.featuresContComp} camper={camper}/>
            <div>
                <h3>Vehicle Details</h3>
                <ul className={s.detailsList}>
                    {keys.map((key, index) => (
                        <li key={index}>
                            <p>{key.charAt(0).toUpperCase()+ key.slice(1)} <span>{camper[key]}</span></p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default FeaturesComponent;
