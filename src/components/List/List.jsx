import React, {Component} from 'react';

import propTypes from 'prop-types';
class List extends Component {
  static propTypes = {
    list: propTypes.array.isRequired,
    count: propTypes.number.isRequired,
    actions: propTypes.object.isRequired
  }
  state = {
    newName :''
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState({newName: this.refs.theInput.value});
    this.props.actions.addToList(this.refs.theInput.value)
}
  render(){console.log(this.props)
    return(
      <div><ul>{this.props.list.map(text => (
              <li key={text.id}>{text.name}<button onClick={()=>this.props.actions.deleteFromList(text.id)}>X</button></li>))}
          </ul>
          <form onSubmit={this.submitForm}><input type='text' ref="theInput"/><button type='submit'>add new yazan</button></form></div>
    )
  }
}

export default List;