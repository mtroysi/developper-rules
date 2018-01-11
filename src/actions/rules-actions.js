import rules from '../data';
import superagent from 'superagent';

export const RULES_LOADED = 'RULES_LOADED';

function rulesLoaded(rules) {
    return {
        type: RULES_LOADED,
        rules
    }
}

export function loadRules() {
    return function(dispatch) {
        superagent.get('rest/rules').end((err, res) => {
            if (res.ok) {
                dispatch(rulesLoaded(rules))
            }
        })
    };
}