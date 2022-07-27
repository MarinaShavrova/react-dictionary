import React, {useState} from "react";

const Search = ({onChange}) =>{
    const [inputValue, setInputValue] = useState('');

     const inputHandler = (e) =>{
        setInputValue(e.target.value)
    }

    const handleKeyPress = (e) => {
        if(e.key == 'Enter') {
            e.preventDefault();
            onChange(inputValue);
            }
        }

    return (
          <div className="search">
            <section>
                    <form>
                        <label>What word do you want to look up?</label>
                        <input onKeyPress={handleKeyPress} value={inputValue}  onChange={e => inputHandler(e)} className="form-control mr-sm-2 bg-light" type="search" placeholder="Search" aria-label="Search" id="search-input"/>
                    </form>
                <small className="hint">i.e. sunset, wine, yoga, coding</small>
            </section>
        </div>
    )
}

export default Search;