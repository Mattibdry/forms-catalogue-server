import React from 'react';
import './CatalogueDefinitions.css'

const CatalogueDefinitions = () => {

    const data = [
        {
            definition: 'Acronym',
            information: 'Represents the department of origin of a form (i.e. PWGSC-TPSGC, PSC-CFP, ect.).)'
        },
        {
            definition: 'Decentralization',
            information: 'Printing Forms on demand, through St. Joseph Corporation\'s Regional Printing Plants.'
        },
        {
            definition: 'Electronic Copy',
            information: 'Indicates the form is available in electronic format.'
        },
        {
            definition: 'Media',
            information: 'The format in which an electronic form is available(i.e. PDF, Form Client'
        },
        {
            definition: 'Method of Supply',
            information: 'How a form can be obtained.'
        },
        {
            definition: 'Paper Copy',
            information: 'Indicates the form is available in paper format.'
        },
        {
            definition: 'Revision Date',
            information: 'Represents the date(month/year) the form was last revised.'
        },
        {
            definition: 'Unit of Issue',
            information: 'Describes how a paper form is packaged (i.e. package, box, roll, book, each).'
        }
    ];


    console.log(data)

        return ( 
            <div>
                <h1 className='Page_Title'>Catalogue Definitions</h1>
                <dl className='well'>
                {data.map(line => (
                <React.Fragment>
                    <dt>{line.definition}</dt> 
                    <dd>{line.information}</dd>
                </React.Fragment>
                ))}
                </dl>
            </div>

        )

}
 
export default CatalogueDefinitions;