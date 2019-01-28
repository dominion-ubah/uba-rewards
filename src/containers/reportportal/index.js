import React, { Component } from 'react'
import "../../App.css";
import DateScheduler from '../date-scheduler/index';

export default class ReportPortalContainer extends Component {

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
        <div className="table-row table-two">
                        <div className="table-col">
                        <p>10</p>
                        </div>
                        <div className="table-col">
                        <p>Remilekun</p>
                        </div>
                        <div className="table-col">
                        <p>Chibundu</p>
                        </div>
                        <div className="table-col">
                        <p>iswtester@yahoo.com</p>
                        </div>
                        <div className="table-col">
                        <p>08180000123</p>
                        </div>
                        <div className="table-col table-act">
                        <span><p>26 Oct 2017</p></span>
                        <span className="ellips-dot"></span>
                        </div>
                    </div>
    )



  render() {
    let table = this.tableContent(this.row, 7)
    return (
        <div>
        <div className="admin-cont ">
          <div className="container" >
          <div className="dashbox">
                <div className="box mb-1x section1">
                  <p className="header3 float-l left-abs-sm pt-1s">Registered Customers</p>  
                  <div className="float-l mt-5s mb-1s">
                  <DateScheduler />
                  </div>

                  {/* <span className="toogle"> <input type="checkbox" id="switch" /><label for="switch"></label><p><span className="today">Today:</span><span className="day"> 20 Apr</span> </p></span> */}
                  <input type="text" placeholder="Search" className="search search-sm" />
                </div>
                <div className="section-table">
                <div className="box table-responsiv">
                   <div className="table-content">
                    <div className="table-row table-head table-two">
                        <div className="table-col">
                        <p>ID</p>
                        </div>
                        <div className="table-col">
                        <p>First Name</p>
                        </div>
                        <div className="table-col">
                        <p>Last Name</p>
                        </div>
                        <div className="table-col">
                        <p>Email</p>
                        </div>
                        <div className="table-col">
                        <p>Phone</p>
                        </div>
                        <div className="table-col">
                        <p>Last Login Date</p>
                        </div>
                    </div>
                    {table}
                   </div>
                </div>
                <div className="box section-footer">
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