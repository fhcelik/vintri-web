import * as R from 'ramda';

export const checkEmailSelector = R.pathOr(false, ['auth', 'user'])
