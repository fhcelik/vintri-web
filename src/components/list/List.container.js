import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { getBeersPropsSelector } from '../../redux/selectors/beers';
import List from './List.view';

export default compose(
    connect(state => ({ beerProps: getBeersPropsSelector(state) })),
    withState('page', 'setPage', 0),
    withState('rowsPerPage', 'setRowsPerPage', 10),
    withHandlers({
        handleChangePage: ({setPage}) => (event, newPage) => {
            setPage(newPage);
        },
        handleChangeRowsPerPage: ({setPage, setRowsPerPage}) => (event) => {
            setRowsPerPage(+event.target.value);
            setPage(0);
        }
    })
)(List);