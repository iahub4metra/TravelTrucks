import styles from "./CamperRating.module.css"
import clsx from "clsx";


const CamperRating = ({ rating }: { rating: number }) => {

    const roundedRating = Math.round(rating * 10) / 10;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span 
                key={i} 
                className={clsx({
                    [styles.filledStar]: i <= roundedRating,
                    [styles.emptyStar]: i > roundedRating
                })}
            >
                ★
            </span>
        );
    }



    return (
        <span className={styles.ratingContainer}>
            {stars}
        </span>
    );
}
 
export default CamperRating;