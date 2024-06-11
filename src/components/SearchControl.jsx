import {useState, useEffect} from 'react';
import {FaSearch, FaWindowClose} from "react-icons/fa";
import data from '../cochrane_reviews.json';


const SearchControl = ({parentCallback}) => {
    const [allTopics, setAllTopics] = useState([]);                         // All topics (as found in input JSON file)
    const [filteredTopics, setFilteredTopics] = useState([]);               // Subset of all topics (those matching search input)
    const [highlightedTopic, setHighlightedTopic] = useState('');           // "Proposed" topic from topics list
    const [selectedTopic, setSelectedTopic] = useState(null);               // Topic when user has finally  made a choice
    const [highlightedTopicIndex, setHighlightedTopicIndex] = useState(0);  // Index of proposed topic in filtered topics
    const [showTopics, setShowTopics] = useState(false);                    // Whether to show the drop-down list of options


    // User is typing in the Search box
    const handleChange = (e) => {
        const userInput = e.target.value;
        setHighlightedTopic(userInput);

        if (userInput) {
            const filtered = allTopics.filter(
                (suggestion) =>
                    suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
            );
            setFilteredTopics(filtered);
            setShowTopics(true);
            setHighlightedTopicIndex(0);
        } else {
            setFilteredTopics([]);
            setShowTopics(false);
        }
    };


    // User has pressed a key while search box has focus
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            if (highlightedTopicIndex < filteredTopics.length - 1) {
                setHighlightedTopicIndex(highlightedTopicIndex + 1);
            }
        } else if (e.key === 'ArrowUp') {
            if (highlightedTopicIndex > 0) {
                setHighlightedTopicIndex(highlightedTopicIndex - 1);
            }
        } else if (e.key === 'Enter') {
            setSelectedTopic(filteredTopics[highlightedTopicIndex]);
            setHighlightedTopic(filteredTopics[highlightedTopicIndex]);
            parentCallback(filteredTopics[highlightedTopicIndex]);

            setFilteredTopics([]);
            setShowTopics(false);
        } else if (e.key === 'Escape') {
            setShowTopics(false);
        }
    };


    // User is mousing over the filtered topics drop-down list
    const handleMouseOver = (idx) => {
        setHighlightedTopicIndex(idx);
    };


    // User mouse-clicks on a topic in the topics list
    const handleClick = (topic) => {
        setSelectedTopic(topic);
        setHighlightedTopic(topic);
        parentCallback(topic);

        setFilteredTopics([]);
        setShowTopics(false);
    };


    // Use clicks the Topic chip
    const deselectTopic = () => {
        setSelectedTopic('');
        setHighlightedTopic('');
        parentCallback('');
    }


    // Initialization:
    useEffect(() => {
        setAllTopics([...new Set(data.flat().map(item => item.topic))]);
    }, []);


    return (
        <section className="search clearfix">
            {selectedTopic && (
                <>
                    Topic: <button onClick={deselectTopic} className="chip">{selectedTopic} <span
                    className="close-icon">x</span></button>
                </>
            )}

            <div>
                <input
                    type="text"
                    value={highlightedTopic}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <FaSearch className="search-icon"/>

                {showTopics && highlightedTopic && (
                    <ul>
                        {filteredTopics.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleClick(suggestion)}
                                onMouseOver={() => handleMouseOver(suggestion, index)}
                                className={(index === highlightedTopicIndex) ? "highlighted" : ""}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};
export default SearchControl;