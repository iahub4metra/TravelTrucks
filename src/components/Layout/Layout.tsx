import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import { Suspense, lazy } from "react";

const HomePage = lazy(()=> import('../../pages/HomePage/HomePage'))
const CatalogPage = lazy(()=> import('../../pages/CatalogPage/CatalogPage'))
const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/catalog" element={<CatalogPage/>} />
                    </Routes>
                </Suspense>
                
            </main>
        </>
        
    );
}
 
export default Layout;