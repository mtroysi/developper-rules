import React from "react";
import PropTypes from 'prop-types';

export default class RuleTitleField extends React.Component {
    render() {
        console.log(this.props.title);
        return(
            <div className="form-group">
                <label htmlFor="rule-title">Title</label>
                <input {...this.props.input} type="text" className="form-control" id="rule-title" placeholder="Title" />
            </div>
        );
    }
}

RuleTitleField.defaultProps = {
    title: '',
};

RuleTitleField.propTypes = {
    title: PropTypes.string,
};