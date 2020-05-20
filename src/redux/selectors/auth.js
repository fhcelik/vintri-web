import * as R from 'ramda';

export const checkUserSelector = R.pathOr(false, ['auth', 'user'])
