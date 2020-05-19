import * as R from 'ramda';
import { createSelector } from 'reselect';

export const getBeersPropsSelector = createSelector(
    R.path(['beers', 'beers']),
    beer => R.map( food => { 
        const { food_pairing } = food;
        return { ...food, food_pairing: R.join(',', food_pairing)}
    }, beer)
)

export const getIdSelector = R.pathOr([], ['beers', 'ids'])