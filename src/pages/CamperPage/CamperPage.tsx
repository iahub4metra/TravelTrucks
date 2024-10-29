import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../redux/store";
import { getCamperById } from "../../redux/campers/operations";
import CamperDetails from "../../components/CamperDetails/CamperDetails";

const CamperPage = () => {
    const { camperId = "" } = useParams()
    const dispatch: AppDispatch = useDispatch()


    useEffect(()=>{
        dispatch(getCamperById(camperId))
    },[dispatch])


    return (
        <section>
            <div className="container">
                <CamperDetails/>
            </div>
        </section>
    );
}
 
export default CamperPage;