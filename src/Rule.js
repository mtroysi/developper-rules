import React from 'react';
import LikeBtn from './LikeBtnContainer';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Rule.css';

export default class Rule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folded: this.props.rule.description ? false : true,
        };
    }

    toggleChevron() {
        this.setState({
            folded: !this.state.folded,
        });
    }

    render() {
        const descriptionStyle = {
            display: this.state.folded ? 'none' : '',
        };

        const tags = this.props.rule.tags.map(tag => <span className="badge" key={tag}>{tag}</span>);

        return (
            <div className="panel panel-primary">
                <div className="panel-heading" role="presentation" onClick={() => this.toggleChevron()}>
                    {this.props.rule.title}
                    <i className={"pull-right glyphicon glyphicon-chevron-" + (this.state.folded ? 'up' : 'down')}></i>
                </div>
                <div className="panel-body" style={descriptionStyle}>
                    <p>{this.props.rule.description}</p>
                </div>
                <div className="panel-footer">
                    <div className="btn-toolbar">
                        {tags}
                        <div className="btn-group btn-group-xs pull-right">
                            <Link className="btn btn-primary" title="Update" to={`/edit/${this.props.rule.id}`}>
                                <i className="glyphicon glyphicon-pencil"></i>
                            </Link>
                        </div>
                        <div className="btn-group btn-group-xs pull-right">
                            <LikeBtn type="up" rule={this.props.rule}/>
                            <LikeBtn type="down" rule={this.props.rule}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Rule.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
};