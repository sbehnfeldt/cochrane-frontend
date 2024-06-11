import {useState, useEffect} from "react";
import ReviewItem from "./ReviewItem";
import data from '../cochrane_reviews.json';


const ReviewList = ({selectedTopic, parentCallback}) => {
    const [reviews, setReviews]       = useState([]);          // All reviews, flattened
    const [maxReviews, setMaxReviews] = useState(10);    // # of reviews to display


    // If user has scrolled to the bottom of viewport,
    // then load more reviews
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return;
        }
        setMaxReviews(maxReviews + 3);
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [maxReviews]);


    // When the selected topic changes,
    // limit the displayed reviews to only those matching the topic
    useEffect(() => {
        parentCallback(selectedTopic ? reviews.filter((el) => selectedTopic ? el.topic === selectedTopic : true).length : 0);
        setMaxReviews(10);
    }, [selectedTopic])


    // Initialize variables
    useEffect(() => {
        setReviews(data.flat());
    }, []);


    return (
        <ul className="reviews">
            {reviews
                .filter((el) => selectedTopic ? el.topic === selectedTopic : true)
                .slice(0, maxReviews)
                .map((review, index) => (
                    <ReviewItem key={index} index={index} review={review}/>
                ))}
        </ul>);
};

export default ReviewList;
