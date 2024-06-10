import {useState, useEffect} from "react";
import ReviewItem from "./ReviewItem";
import data from '../cochrane_reviews.json';


const ReviewList = () => {
    const [reviews, setReviews]     = useState([]);
    const [display, setDisplay]     = useState(10);
    const [isLoading, setIsLoading] = useState(false);


    // Load reviews into App.
    // They are already fetched (loaded from a local .json file),
    // this function simply adds review(s) to the display.
    const fetchReviews = () => {
        setIsLoading(true);
        setReviews(data.slice(0, display));
        setDisplay(display + 1);
        setIsLoading(false);
    }


    // If user has scrolled to the bottom of viewport, load more reviews
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchReviews();
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [reviews]);


    useEffect(() => {
        data = data.flat();
        fetchReviews();
    }, []);


    return (
        <ul className="reviews">
            {reviews.map((review, index) => (
                <ReviewItem key={index} index={index} review={review}/>
            ))}
        </ul>
    );
};

export default ReviewList;
