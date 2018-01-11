import { connect } from 'react-redux';
import {loadRules} from './actions/rules-actions';
import RuleList from "./RuleList";

const mapStateToProps = state => {
    return {
        rules: state.rules,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRules: () => {
            dispatch(loadRules())
        }
    };
};

const RulesListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RuleList);

export default RulesListContainer;