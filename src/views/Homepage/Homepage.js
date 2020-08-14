import React, { Component } from 'react';

class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className='Page_Title'>Welcome to the Forms Catalogue!</h1>
                <p>This web site provides information about the forms used at Public Services and Procurement Canada (PSPC).<br/><br/>To download (and in some cases fill on-line) PDF forms, you will need the free Adobe Acrobat Reader. If you do not already have this on your computer, it is available free of charge from <a href="/">Adobe.</a><br/><br/>If you require additional information about a form, please <a href="/">Contact Us.</a></p>
            </div>
        );
    }
}
 
export default HomePage;