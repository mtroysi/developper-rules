import React from "react";
import Header from './Header';
import {Route} from 'react-router-dom';
import RuleListContainer from "./RuleListContainer";
import RuleFormContainer from "./RuleFormContainer";

export default class Layout extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="container">
                        <Route exact path="/" component={RuleListContainer} />
                        <Route exact path="/new" component={RuleFormContainer} />
                        <Route path={`/edit/:id`} component={RuleFormContainer} />
                    </div>
                </div>
            </div>
        );
    }
}