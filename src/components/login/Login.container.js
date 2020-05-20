import { connect } from 'react-redux';
import { branch, compose, renderComponent, withHandlers, withState } from 'recompose';
import { saveQueryEmail } from '../../redux/actions/auth';
import { checkUserSelector } from '../../redux/selectors/auth';
import ListItems from '../ListItems';
import Login from './Login.view';

export default compose(
  connect(state => ({ isUser: checkUserSelector(state)}), {
    saveQueryEmail,
  }),
  branch(({isUser}) => isUser, renderComponent(ListItems)),
  withState('search','setSearch',null),
  withHandlers({
      handleChange: ({setSearch}) => ({ target: { value } }) => {
        setSearch(value);
      },
      handleSubmit: ({saveQueryEmail, search})=>(e)=> {
        e.preventDefault(); 
        saveQueryEmail(search)},
  })
)(Login);