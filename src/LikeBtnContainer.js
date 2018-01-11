import { connect } from 'react-redux';
import { doLike, doDislike } from './actions/like-actions';
import LikeBtn from './LikeBtn';

const mapDispatchToProps = (dispatch, ownProps) => ({
    doLike: (id) => {
        dispatch(doLike(id));
    },
    doDislike: (id) => {
        dispatch(doDislike(id));
    },
});

const LikeBtnContainer = connect(
    undefined,
    mapDispatchToProps,
)(LikeBtn);
export default LikeBtnContainer;