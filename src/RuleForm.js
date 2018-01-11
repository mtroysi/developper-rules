import React from "react";
import RuleTitleField from './RuleTitleField';
import RuleDescriptionField from './RuleDescriptionField';
import { Field } from 'redux-form';

function validateTitle(title) {
    if (!title) {
        return 'The title is required';
    } else if (title.length > 50) {
        return 'The title must be shorter than 50 characters';
    }
    return undefined;
}

function validateDescription(description) {
    if (description) {
        if (description.length < 5) {
            return 'The description must be longer than 5 characters';
        } else if (description.length > 100) {
            return 'The title must be shorter than 100 characters';
        }
    }
    return undefined;
}

export default class RuleForm extends React.Component {
    render() {
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">New rule</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <Field name="title" component={RuleTitleField} validate={validateTitle}/>
                        <Field name="description" component={RuleDescriptionField} validate={validateDescription}/>
                        <button type="submit" className="btn btn-primary pull-right">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

RuleForm.defaultProps = {
    rule: {},
};