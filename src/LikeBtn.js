import React from 'react';
import PropTypes from 'prop-types';
import './Rule.css';

export default class LikeBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter,
        };
    }

    // Increment counter.
    increment() {
        if (this.props.type === 'up') {
            this.props.doLike(this.props.rule.id);
        } else {
            this.props.doDislike(this.props.rule.id);
        }
    }

    render() {
        const rule = this.props.rule;
        const counter = this.props.type === 'up' ? rule.likes : rule.dislikes;
        return(
            <a className="btn btn-default" title={this.props.type === 'up' ? "+1" : "-1"} onClick={() => {this.increment()}}>
                {counter} <i className={"glyphicon glyphicon-thumbs-" + (this.props.type)}></i>
            </a>
        );
    }
}

LikeBtn.propTypes = {
    counter: PropTypes.number,
    type: PropTypes.oneOf(['up', 'down']),
};