import { useDispatch } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import { useEffect } from "react";
import { getCampers } from "../../redux/campers/operations";
import { AppDispatch } from "../../redux/store";
import Sidebar from "../../components/Sidebar/Sidebar";
import s from "./CatalogPage.module.css"
const CatalogPage = () => {
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(getCampers())
    }, [dispatch])
    
    return (
        <section className={s.catalogSection}>
            <div className="container">
                <Sidebar/>
                <CampersList/>
            </div>
        </section>
        
    );
}
 
export default CatalogPage;