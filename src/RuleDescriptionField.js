import React from "react";
import PropTypes from 'prop-types';

export default class RuleDescriptionField extends React.Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="rule-desc">Description</label>
                <textarea {...this.props.input} className="form-control" id="rule-desc" placeholder="Description" />
            </div>
        );
    }
}

RuleDescriptionField.defaultProps = {
    description: '',
};

RuleDescriptionField.propTypes = {
    description: PropTypes.string,
};
