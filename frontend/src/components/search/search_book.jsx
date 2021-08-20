import React, { useState, useEffect } from "react";
import AddLeaf from '../leaves/add_leaf_container';
import './search.css'

export default function () {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyB8uY1e1Cxe0tLz_rRJtjqjOGZb3Sw2ITA");
    
    
    function handleSubmit(e) {
        e.preventDefault();
      
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + book + '&key=' + apiKey)
            .then(response => response.json())
            .then((data) => {
                setResult(data.items);
            });
        if(!result) return null;
        if(result.length === 0) return null;
        console.log(result[0]);
        console.log(result[0].volumeInfo.title);
        // document.getElementsByClassName("btn")[0].value = "";
        // setBook("");

        
    }
    function handleChange(e) {
        setBook(e.target.value);
      
    }

    return (
        <div>
            <form className="form-search" onSubmit={handleSubmit}>
                <input className="btn"
                 type="text"
                    onChange={handleChange}
                    placeholder="Search for Books"
                    // value={book}
                />
                <input className="btn" type="submit" value='search'/>
            </form>
            
            <AddLeaf data={result}/>
        </div>
    )
}