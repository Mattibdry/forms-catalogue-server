import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../views/Homepage/Homepage';
import FormSearch from '../views/FormSearch/FormSearch';
import Pdfdetails from '../views/Pdfdetails/Pdfdetails';
import CatalogueDefinitions from '../views/CatalogueDefinitions/CatalogueDefinitions';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/FormSearch' exact component={FormSearch} />
            <Route path='/Pdfdetails' exact component={Pdfdetails} />
            <Route path='/CatalogueDefinitions' exact component={CatalogueDefinitions} />
        </Switch>
    )
}

export default Routes;