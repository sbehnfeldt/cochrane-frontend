import React, {useState} from "react";
import SearchControl from "./components/SearchControl";
import ReviewList from "./components/ReviewList";
import './App.css';


function App() {
    const [selectedTopic, setSelectedTopic] = useState('');

    const handleCallback = (childData) => {
        setSelectedTopic(childData)
    };

    return (
        <div className="App">
            <SearchControl parentCallback={handleCallback}/>
            <ReviewList selectedTopic={selectedTopic}/>
        </div>
    );
}

export default App;
