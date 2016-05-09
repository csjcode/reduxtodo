import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';

export const TodoList = connect(
  function mapStateToProps(state) {
    // ...
  },
  function mapDispatchToProps(dispatch) {
    // ...
  }
)(components.TodoList);
