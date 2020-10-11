import React from 'react';
import '../static/table.css';


export default function TableList(props) {
  

    return(

        <table onLoad={() => props.sortBy('average_pace')} className="table">
            <thead>
                <tr>
                    <th>UserID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Total-Time</th>
                    <th>Distance</th>
                    
                    <button onClick={() => props.sortBy('average_pace')}>
                        Average-Pace
                    </button>
                    

                </tr>
            </thead>
            
            <tbody>
               
                {   
                        props.data.map(row => {
                           
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

    )
}
