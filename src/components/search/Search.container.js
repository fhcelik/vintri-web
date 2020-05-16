import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { searchBeer } from '../../redux/actions/beers';
import Search from './Search.view';

export default compose(
  connect(null, {
    searchBeer,
  }),
  withHandlers({
      handleChange: ({searchBeer}) => ({ target: { value } }) => {
        searchBeer(value);
      },
  })
)(Search);