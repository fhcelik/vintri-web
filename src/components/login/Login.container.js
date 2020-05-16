import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { saveQueryEmail } from '../../redux/actions/auth';
import Login from './Login.view';

export default compose(
  connect(null, {
    saveQueryEmail,
  }),
  withState('search','setSearch',null),
  withHandlers({
      handleChange: ({setSearch}) => ({ target: { value } }) => {
        setSearch(value);
      },
      handleSubmit: ({saveQueryEmail, search})=>(e)=> {
        e.preventDefault(); 
        console.log(search,'qqq'); saveQueryEmail(search)},
  })
)(Login);