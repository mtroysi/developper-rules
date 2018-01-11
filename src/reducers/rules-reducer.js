import {RULES_LOADED} from "../actions/rules-actions";
import { findIndex } from 'lodash';
import { DO_LIKE, DO_DISLIKE } from '../actions/like-actions';

const initialState = [];

export function rulesReducer(state = initialState, action) {
    switch(action.type) {
        case RULES_LOADED:
            return [...action.rules];
        case DO_LIKE: {
            const index = findIndex(state, { id: action.id });
            const newRule = { ...state[index] };
            const newRules = [...state];
            newRule.likes += 1;
            newRules[index] = newRule;
            return newRules;
        }

        case DO_DISLIKE: {
            const index = findIndex(state, { id: action.id });
            const newRule = { ...state[index] };
            const newRules = [...state];
            newRule.dislikes += 1;
            newRules[index] = newRule;
            return newRules;
        }
        default:
            return state;
    }
}