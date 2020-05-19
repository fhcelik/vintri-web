import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { searchBeer } from '../../redux/actions/beers';
import Search from './Search.view';

export default compose(
  connect(null, {
    searchBeer,
  }),
  withState('search','setSearch',null),
  withHandlers({
      handleChange: ({setSearch}) => ({ target: { value } }) => {
        setSearch(value);
      },
      handleSubmit: ({searchBeer, search})=>(e)=> {
        e.preventDefault(); 
        searchBeer(search)},
  })
)(Search);