import ReviewItem from "./ReviewItem";
import data from '../cochrane_reviews.json';

const ReviewList = () => {
    return (
        <ul>
            {data.flat().map((review, index) => (
                <ReviewItem key={index} index={index} review={review} />
            ))}
        </ul>
    );
};

export default ReviewList;
