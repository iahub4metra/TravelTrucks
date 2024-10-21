import { Link } from "react-router-dom";
import s from "./HomePage.module.css"
const HomePage = () => {
    return (
        <section className={s.homeSection}>
            <div className="container">
                <div>
                    <h1 className={s.mainTitle}>Campers of your dreams</h1>
                    <h2 className={s.secondTitle}>You can find everything you want in our catalog</h2>
                </div>
                <Link className={s.linkToCatalog} to='/catalog'>View Now</Link>
            </div>
        </section>
    );
}
 
export default HomePage;