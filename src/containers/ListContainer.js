import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as listActions from '../actions';
import List from '../components/List';

const mapStateToProps = (state) => ({
  list: state.list.toJS().text,
  count:state.list.toJS().count
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(listActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(List);

