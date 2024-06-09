import React from "react";
import SearchControl from "./components/SearchControl";
import ReviewList from "./components/ReviewList";
import './App.css';


function App() {
    return (
        <div className="App">
            <SearchControl />
            <ReviewList/>
        </div>
    );
}

export default App;
