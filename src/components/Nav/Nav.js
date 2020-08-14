import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
    state = {  }

    render() { 
        return ( 
            <div className='left-nav'>
                <h3>Forms Catalogue</h3>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/formsearch'>
                        <li>Search for forms</li>
                    </Link>
                    <Link to='/cataloguedefinitions'>
                        <li>Catalogue definitions</li>
                    </Link>
                    <Link to='/pdfdetails'>
                        <li>pdfdetails</li>
                    </Link>
                </ul>
            </div>
         );
    }
}
 
export default Nav;

