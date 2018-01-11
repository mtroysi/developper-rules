import React from 'react';
import Rule from './Rule';
import PropTypes from 'prop-types';

export default class RuleList extends React.Component {
    componentDidMount() {
        this.props.fetchRules();
    }

    render() {
        const elements = this.props.rules.map(rule => <Rule rule={rule} key={rule.id}/>);
        return(
            <div>
                {elements}
            </div>
        );
    }
}

RuleList.propTypes = {
    rules: PropTypes.arrayOf(PropTypes.object),
};