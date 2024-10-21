import { useDispatch } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import { useEffect } from "react";
import { getCampers } from "../../redux/campers/operations";
import { AppDispatch } from "../../redux/store";

const CatalogPage = () => {
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(getCampers())
    }, [dispatch])
    
    return (
        <CampersList/>
    );
}
 
export default CatalogPage;