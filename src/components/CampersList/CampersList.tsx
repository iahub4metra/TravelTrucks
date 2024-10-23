import { useSelector } from "react-redux";
import { campersSelector, pageSelector } from "../../redux/campers/selectors";
import Camper from "../CamperCard/CamperCard";
import s from "./CampersList.module.css"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { increasePage } from "../../redux/campers/slice";

const CampersList = () => {
    const campers = useSelector(campersSelector)
    const page = useSelector(pageSelector)
    const dispatch: AppDispatch = useDispatch()
    const limit = 4
    const totalPages = Math.ceil(campers.length / limit)

    const indexOfFirstItem = (page - 1) * limit
    const indexOfLastItem = indexOfFirstItem + limit;


    const currentCampers = campers.slice(0, indexOfLastItem)

    const handleLoadMore = () => {
        if (page < totalPages) {
            dispatch(increasePage())
        }
    }
    return (
        <div>
            <ul className={s.campersList}>
                {currentCampers.map(camper => (
                    <li className={s.campersListItem} key={camper.id}>
                        <Camper camper={camper}/>
                    </li>
                ))}
            </ul>
            {page < totalPages && <button className={s.btnLoadMore} type="button" onClick={()=> handleLoadMore()}>Load more</button>}
        </div>
    );
}
 
export default CampersList;