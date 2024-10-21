import { useSelector } from "react-redux";
import { campersSelector } from "../../redux/campers/selectors";
import Camper from "../CamperCard/CamperCard";
import s from "./CampersList.module.css"

const CampersList = () => {
    const campers = useSelector(campersSelector)
    return (
        <>
            <ul className={s.campersList}>
                {campers.map(camper => (
                    <li className={s.campersListItem} key={camper.id}>
                        <Camper camper={camper}/>
                    </li>
                ))}
            </ul>
        </>
    );
}
 
export default CampersList;