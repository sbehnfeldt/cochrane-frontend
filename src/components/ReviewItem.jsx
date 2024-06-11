const ReviewItem = ({index, review}) => {
    return (
        <li data-topic={review.topic}>
            <p className="title"><a href={review.url}>{review.title}</a></p>
            <p className="author"><b>Topic: </b> {review.topic}</p>
            <p className="author">{review.author}</p>
            <p className="date">{review.date}</p>
        </li>

    );
};
export default ReviewItem;
