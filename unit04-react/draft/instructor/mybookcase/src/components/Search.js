import React from 'react';

const propTypes = {};
const defaultProps = {};

const Search = (props) => {

    const handleSubmit = (event) =>{
        event.preventDefault();
    };

    return <div className="searchBar">
        <form onSubmit={handleSubmit}>
        <label>
            <input type="text" placeholder="Enter name, author, keyword or genre..." name="search" value={props.keyword} onChange={(e) => props.startSearch(e.target.value)}/>
        </label>
        <input type="submit" value="Find"/>
        </form>
    </div>
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
// #endregion

export default Search;
