import './App.css';
import React from "react";
import ReviewList from './ReviewList';

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
