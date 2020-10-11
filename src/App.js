import React from 'react';
import './static/App.css';
import TableList from './components/table-list.js';
import csvData from './data/users.json';
import paceData from './data/paces.json';
const newArr = require('./test');

const data = newArr.ElementDegistir(csvData,paceData);

  class App extends React.Component {
    
    constructor(props) {
      super(props); 
      this.sortBy = this.sortBy.bind(this);


      this.state = {
        data: data,
        direction: {
          average_pace: 'asc'
        }

      }

 }
  sortBy(key){
    this.setState({
      data: data.sort( (a,b) => (
        this.state.direction[key] === 'asc'
        ? parseFloat(a[key]) - parseFloat(b[key])
        : parseFloat(b[key]) - parseFloat(a[key])
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
        ? 'desc'
        : 'asc'
      }
    
    })
  }
 
    render(){
    return (
    <div className = "page-container">
      <TableList data={this.state.data} sortBy={this.sortBy}/>
    </div>
  );
}
}

export default App;
