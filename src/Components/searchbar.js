import React from 'react';
function SearchBar  ({ setSearchQuery }) {
    const handleChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    return (
        <input
            type="text"
            placeholder="Search chats..."
            onChange={handleChange}
            style={{ position:'absolute',padding: '5px', width: '236px'}}
        />

    );
};

export default SearchBar;
