import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FORM_PAGE from '../pages/form';
import END_REGISTER from '../pages/end_register';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={FORM_PAGE} />
                <Route path="/end_register" component={END_REGISTER} />
            </Switch>
        </BrowserRouter >
    )
}

export default Routes