import { useDispatch } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import { useEffect } from "react";
import { getCampers } from "../../redux/campers/operations";
import { AppDispatch } from "../../redux/store";
import Sidebar from "../../components/Sidebar/Sidebar";
import s from "./CatalogPage.module.css"
import { useSelector } from "react-redux";
import { errorSelector, loadingSelector } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";
import { filterSelector } from "../../redux/filters/selectors";
const CatalogPage = () => {
    const dispatch: AppDispatch = useDispatch()
    const isLoading = useSelector(loadingSelector)
    const filters = useSelector(filterSelector)
    const error = useSelector(errorSelector)
    useEffect(() => {
        dispatch(getCampers(filters))
    }, [dispatch, filters])
    
    return (
        <section className={s.catalogSection}>
            <div className="container">
                {isLoading ? <Loader />
                    : 
                    <>
                        <Sidebar />
                        {error ? (<p>Campers not found!</p>) : <CampersList/>}
                    </>
                }
            </div>
        </section>
        
    );
}
 
export default CatalogPage;