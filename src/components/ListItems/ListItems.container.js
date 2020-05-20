import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { saveRating } from '../../redux/actions/comment';
import { getIdSelector } from '../../redux/selectors/beers';
import ListItems from './ListItems.view';

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
            saveRating({id:Number(age), rating:Number(val), comment:String(com)});
        }
    })
)(ListItems);