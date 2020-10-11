import React from 'react';
import './static/App.css';
import TableList from './components/table-list.js';
import csvData from './data/users.json';
import 'bootstrap/dist/css/bootstrap.css';
import paceData from './data/paces.json';
const newArr = require('./test');

const data = newArr.ElementDegistir(csvData,paceData);

  class App extends React.Component {
    
    constructor(props) {
      super(props); 
      this.sortBy        = this.sortBy.bind(this);
      this.onRadioChange = this.onRadioChange.bind(this);
      this.onFilter      = this.onFilter.bind(this);

      this.state = {
        data: data,
        direction: {
          average_pace: 'asc',
          distance:'asc',
          total_time:'asc'
        },
        radio: {
          'min':'0',
          'max':'100'
        },
        

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

    onRadioChange(e){
      
      this.setState(
        {
          radio: JSON.parse(e.target.value)
        }
        )
        
    }
    
    onFilter(e){
      if(this.state.radio.min == 0){
        window.location.reload();
      }
      let temp = [];
      this.state.data.forEach((item) => {
        if(item['age'] <= parseFloat(this.state.radio.max) && item['age'] >= parseFloat(this.state.radio.min)){
          temp.push(item);
        }
       }
      );
       console.log(temp)
      this.setState({
        data:temp
      })
    }
 
   
    
    render(){
    return (
    <div className = "container page-container ">
      <div className='radiodiv'>
    <h1>{this.state.radio.min}-{this.state.radio.max}</h1>
      <input type="radio" name="age" onChange={this.onRadioChange} value='{"min":"0","max":"100"}'/>
            <label>Default</label>
      <input type="radio" name="age" onChange={this.onRadioChange} value='{"min":"20","max":"30"}'/>
            <label>20 - 30</label>
      <input type="radio"  name="age" onChange={this.onRadioChange} value='{"min":"30","max":"40"}'/>
            <label>30 - 40</label>  
      <input type="radio"  name="age" onChange={this.onRadioChange} value='{"min":"40","max":"60"}'/>
            <label>40 - 60</label>
            <input type="submit" value = "Filter" onClick={this.onFilter} />
            </div>
      <TableList data={this.state.data} sortBy={this.sortBy}/>
    </div>
  );
}
}

export default App;
