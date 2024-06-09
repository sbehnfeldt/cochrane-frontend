import data from "../cochrane_reviews.json";

const SearchControl = () => {
    const topics = [...new Set(data.flat().map(item => item.topic))];
    return (
        <div className="clearfix">
            <input type="search" name="search"/>
        </div>
    );
};
export default SearchControl;
