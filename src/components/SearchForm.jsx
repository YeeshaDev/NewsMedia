import React,{useState} from 'react'

function SearchForm({inputText}) {
    const [text,setText] = useState('')

    const handleChange=(e) => {
        e.preventDefault();
        setText(e.target.value)
    }

    const handleSubmit =(e) => {
        e.preventDefault();
     inputText(text)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Search...'
                className='search-bar'
                value={text}
                onChange={handleChange}
                />
                <i className="mdi mdi-magnify"></i>
            </form>
            
            <div>
                <p></p>
            </div>
        </div>
    )
}

export default SearchForm
