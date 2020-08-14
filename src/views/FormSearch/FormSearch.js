import React from 'react';
import './FormSearch.css'


const FormSearch = () => {
    const [input, setInput] = React.useState("");

    return (
      <div>
        <h1 className='Page_Title'>Search for forms</h1>
        <h2>Search options</h2>
        <div className='alert_search'>
          <p>Examples: 942, 111-1, purchase, requisting for goods</p>
        </div>
        <form>
          <div>
            <label htmlFor="input">Keywords <span style={{color: '#d3080c', fontWeight: '400'}}>*<br/>required</span></label>
            <input
              type='input' id='input' value={input} onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <input id='search_btn' type='submit' name='Submit'/>
          <input id='search_btn' type='reset' name='Reset'/>
        </form>
        <h1>{input}</h1>
      </div>
    );
  }
 
export default FormSearch;

