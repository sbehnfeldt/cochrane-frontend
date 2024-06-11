import React, {useState} from "react";
import SearchControl from "./components/SearchControl";
import ReviewList from "./components/ReviewList";
import './App.css';


function App() {
    const [selectedTopic, setSelectedTopic] = useState('');
    const [reviewCount, setReviewCount]     = useState(null);

    const receiveSelectedTopic = (childData) => {
        setSelectedTopic(childData)
    };

    const receiveReviewCount = (childData) => {
        setReviewCount(childData);
    }

    return (
        <div className="App">
            <SearchControl reviewCount={reviewCount} parentCallback={receiveSelectedTopic}/>
            <ReviewList selectedTopic={selectedTopic} parentCallback={receiveReviewCount}/>
        </div>
    );
}

export default App;
