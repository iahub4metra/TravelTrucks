import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Loader from "../../components/Loader/Loader";
import { getCampers } from "../../redux/campers/operations";
import { AppDispatch } from "../../redux/store";
import { errorSelector, loadingSelector } from "../../redux/campers/selectors";
import { filterSelector } from "../../redux/filters/selectors";
import s from "./CatalogPage.module.css"
import { openSidebar } from "../../redux/filters/slice";

const CatalogPage = () => {
    const dispatch: AppDispatch = useDispatch()
    const isLoading = useSelector(loadingSelector)
    const filters = useSelector(filterSelector)
    const error = useSelector(errorSelector)
    useEffect(() => {
        dispatch(getCampers(filters))
    }, [dispatch])
    
    return (
        <section className={s.catalogSection}>
            <div className="container">
                {isLoading ? <Loader />
                    : 
                    <>  
                        <button onClick={()=> dispatch(openSidebar())} className={s.btnFilters}>Filters</button>
                        <Sidebar />
                        {error ? (<p>Campers not found!</p>) : <CampersList/>}
                    </>
                }
            </div>
        </section>
        
    );
}
 
export default CatalogPage;