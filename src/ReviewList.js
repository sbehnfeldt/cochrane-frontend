import data from './cochrane_reviews.json';

const ReviewList = () => {
    console.log(data.flat());

    return (
        <ul>
            {data.flat().map((review, index) => (
                <li key={index}>
                    <p className="title"><a href={review.url}>{review.title}</a></p>
                    <p className="author">Author: {review.author}</p>
                    <p className="date">Date: {review.date}</p>
                </li>
            ))}
        </ul>
    );
};

export default ReviewList;
