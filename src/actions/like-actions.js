import superagent from 'superagent';

export const DO_LIKE = 'DO_LIKE';
export const DO_DISLIKE = 'DO_DISLIKE';

export function doLike(id) {
    return function(dispatch) {
        superagent.post(`/rest/rules/${id}/likes`).end((err, res) => {
            if (res.ok) {
                dispatch({
                    type: DO_LIKE,
                    id: id,
                })
            }
        })
    };
}

export function doDislike(id) {
    return function(dispatch) {
        superagent.post(`/rest/rules/${id}/dislikes`).end((err, res) => {
            if (res.ok) {
                dispatch({
                    type: DO_DISLIKE,
                    id,
                })
            }
        })
    };
}