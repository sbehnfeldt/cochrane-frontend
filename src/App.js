import React from "react";
import ReviewList from "./components/ReviewList";
import './App.css';


function App() {
    return (
        <div className="App">
            <div className="clearfix">
                <input type="search" name="search"/>
            </div>

            <ReviewList/>

        </div>
    );
}

export default App;
