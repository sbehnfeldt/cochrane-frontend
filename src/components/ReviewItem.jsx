const ReviewItem = ({index, review}) => {
    return (
        <li key={index}>
            <p className="title"><a href={review.url}>{review.title}</a></p>
            <p className="author">{review.author}</p>
            <p className="date">{review.date}</p>
        </li>

    );
};
export default ReviewItem;
