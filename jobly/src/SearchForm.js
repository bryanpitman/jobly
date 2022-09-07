import { useState } from 'react';

/** Function for rendering a search form
 * Props:
 * -handleSubmit: a function called when form is submitted 
 *                 that changes state of parent when called
 * 
 * State:
 * -formData: The form data
 */

function SearchForm({ search }) {

    const [filter, setfilter] = useState("");
    
    function handleChange(evt) {
        setfilter(evt.target.value);
    }
    
    function handleSubmit(evt) {
        evt.preventDefault();
        search(filter);
        setfilter("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={filter} onChange={handleChange} />
            <button>Search!</button>
        </form>
    );
}

export default SearchForm;