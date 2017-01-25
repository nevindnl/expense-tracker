import React from 'react';

import SearchExpenses from '../search_expenses/search_expenses_container';

class Report extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      t1: this.props.t1,
      t2: this.props.t2
    };
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  componentDidUpdate(){
    this.props.searchExpenses();
  }

  filter(){
    this.props.updateSearch(this.state.t1, this.state.t2);
  }

  render(){
    return (
      <div className='report'>
        <div className='filter'>
          <label>Start</label>
          <input type='datetime-local' value={this.state.datetime} onChange={this.update('t1')}/>
          <label>End</label>
          <input type='datetime-local' value={this.state.datetime} onChange={this.update('t2')}/>
          <button onClick={this.filter.bind(this)}>Filter</button>
        </div>
        <SearchExpenses />
      </div>
    );
  }
}

export default Report;
