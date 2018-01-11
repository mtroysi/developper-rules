import {connect} from 'react-redux';
import RuleForm from './RuleForm';
import {find} from 'lodash';
import {reduxForm} from 'redux-form';
import { compose } from 'redux';

const mapStateToProps = (state, ownProps)=> {
    const id = Number(ownProps.match.params.id);
    return {
        // rule: find(state.rules, { id }),
        initialValues: find(state.rules, { id }),
    };
};

const RuleFormContainer = compose(
    connect(mapStateToProps),
    reduxForm({
        form: 'rule',
    }),
)(RuleForm);

export default RuleFormContainer;