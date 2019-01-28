import React, { Component } from 'react'
import "../../App.css";
import DateScheduler from '../date-scheduler/';

export default class AdminUsersContainer extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    tableContent (row, n) {
        var table = [];
    
        for (var i = 0; i <= n; i++) {
            table = table.concat(row);
        };
    
        return table;
    };


    row = (
        <div className="table-row">
        <div className="table-col">
        <p>oluwatayo.alofun@interswitchgroup.com</p>
        </div>
        <div className="table-col">
        <p>Super Admin</p>
        </div>
        <div className="table-col">
        <p>April 26, 2018 15:10</p>
        </div>
        <div className="table-col">
        <p>April 20, 2018 12:17</p>
        </div>
        <div className="table-col table-act">
        <span className="act-dot"></span>
        <span><p>Active</p></span>
        <span className="ellips-dot"></span>
        </div>
    </div>
    )


  render() {

    let table = this.tableContent(this.row, 7)
    console.log(table)

// audrey gallaga

    return (
        <div>
        <div className="admin-cont ">
          <div className="container">
          <div className="dashbox">
                <div className="box mb-1x section1">
                <p className="header3 float-l pt-1s left-abs-sm ">Admin Users</p>  
                  <div className="float-l mt-5s mb-1s" style={{
                      marginTop:'0.7em'
                    }}>
                  <DateScheduler />
                  </div>
                  {/* <span className="toogle"> <input type="checkbox" id="switch" /><label for="switch"></label><p><span className="today">Today:</span><span className="day"> 20 Apr</span> </p></span> */}
                  <input type="text" placeholder="Search" className="search search-sm" />
                    <button className="add-btn"> <p>New Admin User</p></button>
                </div>
                <div className="section-table">
                    <div className="box table-responsiv">
                    <div className="table-content">
                        <div className="table-row table-head">
                            <div className="table-col">
                            <p>Email</p>
                            </div>
                            <div className="table-col">
                            <p>Role</p>
                            </div>
                            <div className="table-col">
                            <p>Current Sign In At</p>
                            </div>
                            <div className="table-col">
                            <p>Last Sign In At</p>
                            </div>
                            <div className="table-col">
                            <p>Status</p>
                            </div>
                        </div>
                            {table}
                    </div>
                    </div>
                    <div className="box">
                        <div className="table-footer">
                            <p className="float-l mt-5s">
                            Displaying Users 1 - 39 of 39 in total
                            </p>
                            <div className="paginate-box">
                                <span className="page-left"></span>
                                <span className="mid">
                                <p>Page 1 of 2</p>
                                </span>
                                
                                <span className="page-right"></span>
                            </div>
                            <p className="underline float-r no-spaces mt-5s">
                            Download: CSV XML JSON
                            </p>
                        </div>
                    </div>

                </div>
                
              </div>
            
          </div>
        </div>
        </div>
       
    )
  }
}