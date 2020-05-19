import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withProps, withState } from 'recompose';
import ListItems from './ListItems.view';
import { getIdSelector } from '../../redux/selectors/beers'
import { saveRating } from '../../redux/actions/comment'

export default compose(
    connect(state => ({ ids: getIdSelector(state)}), { saveRating }),
    withState('age', 'setAge', ''),
    withState('com', 'setCom', ''),
    withState('val', 'setVal', 2),
    withHandlers({
        handleChange: ({setAge}) => ({target:{ value }}) => {
            setAge(value);
        },
        commentChange: ({ setCom }) => ({ target: { value } }) => {
            setCom(value)
        },
        ratingChange: ({setVal}) => (event, newValue) => {
            setVal(newValue);
        },
        handleSubmit: ({saveRating, age, val, com}) => (e) => {
            e.preventDefault();
            saveRating({id:age, rating:val, comment:com});
        }
    })
)(ListItems);