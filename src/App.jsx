import React from "react";
import SearchControl from "./components/SearchControl";
import ReviewList from "./components/ReviewList";
import './App.css';


function App() {
    const handleCallback = (childData) => {
        console.log("Callback");
        console.log(childData);
    };

    return (
        <div className="App">
            <SearchControl parentCallback={handleCallback}/>
            <ReviewList/>
        </div>
    );
}

export default App;
