import React from 'react';
import '../static/table.css';


class TableList extends React.Component {
  // sort when tablelist component loads
  componentDidMount(){
    this.props.sortBy('average_pace');
  }

render(){
    return(
        <div className="container">
            
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>UserID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>
                    <button className='btn btn-warning' onClick={() => this.props.sortBy('total_time')}>
                        Total Time
                    </button>
                    </th>
                    <th>
                    <button className='btn btn-warning' onClick={() => this.props.sortBy('distance')}>
                        Distance
                    </button>
                    </th>
                    <th>
                    <button className='btn btn-warning' onClick={() => this.props.sortBy('average_pace')}>
                        Average-Pace
                    </button>
                    </th>
                </tr>
            </thead>
            
            <tbody>
               
                {   
                        this.props.data.map(row => {
                           
                            return(
                            <tr>
                            <td>{row.userid}</td>
                            <td>{row.username}</td>
                            <td>{row.age}</td>
                            <td>{row.gender}</td>
                            <td>{row.total_time}</td>
                            <td>{row.distance}</td>
                            <td>{row.average_pace}</td>
                           
                            
                            
                            </tr>)
                        })
                        
                        
                }
              

               
            </tbody>

        </table>
        </div>
    )
}
}
        export default TableList;