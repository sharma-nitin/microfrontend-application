import React from 'react';
import './dashboard.css';
export const Dashboard = ({ userDetails }) => {
    return (
        <div>
               <table className="user-table user-data">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Contact no.</th>
                  </tr>
                 {userDetails.user.map(function (user, index) {
                   return (
                  <tr>
                    <td> {user.id}</td>
                    <td> {user.name}</td>
                    <td>{user.age}</td>
                    <td> {user.gender}</td>
                    <td> {user.email}</td>
                    <td>{user.phoneNo}</td>
                 </tr>)
                
            })}
            </table>
             

        </div>
    )
}

