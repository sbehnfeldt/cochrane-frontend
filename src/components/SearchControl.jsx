import {useState, useEffect} from 'react';
import data from '../cochrane_reviews.json';

const SearchControl = () => {
    const [allTopics, setAllTopics] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [filteredTopics, setFilteredTopics] = useState([]);
    const [showTopics, setShowTopics] = useState(false);
    const [activeTopicIndex, setActiveTopicIndex] = useState(0);


    const handleChange = (e) => {
        const userInput = e.target.value;
        setSelectedTopic(userInput);

        if (userInput) {
            const filtered = allTopics.filter(
                (suggestion) =>
                    suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
            );
            setFilteredTopics(filtered);
            setShowTopics(true);
            setActiveTopicIndex(0);
        } else {
            setFilteredTopics([]);
            setShowTopics(false);
        }
    };


    const handleClick = (topic) => {
        setSelectedTopic(topic);
        setFilteredTopics([]);
        setShowTopics(false);
    };


    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            if (activeTopicIndex < filteredTopics.length - 1) {
                setActiveTopicIndex(activeTopicIndex + 1);
            }
        } else if (e.key === 'ArrowUp') {
            if (activeTopicIndex > 0) {
                setActiveTopicIndex(activeTopicIndex - 1);
            }
        } else if (e.key === 'Enter') {
            setSelectedTopic(filteredTopics[activeTopicIndex]);
            setFilteredTopics([]);
            setShowTopics(false);
        } else if (e.key === 'Escape') {
            setShowTopics(false);
        }
    };


    useEffect(() => {
        setAllTopics([...new Set(data.flat().map(item => item.topic))]);
    }, []);


    return (
        <div className="searchTopics clearfix">
            <input
                type="text"
                value={selectedTopic}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {showTopics && selectedTopic && (
                <ul>
                    {filteredTopics.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleClick(suggestion)}
                            style={{
                                backgroundColor:
                                    index === activeTopicIndex ? '#d3d3d3' : 'transparent',
                            }}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default SearchControl;