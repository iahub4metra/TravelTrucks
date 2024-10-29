import { Camper } from "../App/App.types";
import CamperRating from "../CamperRating/CamperRating";
import s from "./Reviews.module.css"
const Reviews = ({camper}:{camper: Camper}) => {
    return (
        <ul className={s.reviewsList}>
            {camper.reviews.map((review, index) => (
                <li key={index}>
                    <div className={s.upperContReview}>
                        <h2 className={s.avatar}>{review.reviewer_name.charAt(0).toUpperCase()}</h2>
                        <div>
                            <h3>{review.reviewer_name}</h3>
                            <CamperRating rating={review.reviewer_rating}/>
                        </div>
                    </div>
                    <p>{review.comment}</p>
                </li>
            ))}

            
        </ul>
    );
}
 
export default Reviews;