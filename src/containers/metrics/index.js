import React, { Component } from 'react'
import "../../App.css";
import DateScheduler from '../date-scheduler';

export default class MetricsContainer extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
        <div>
        <div className="admin-cont ">
          <div className="container">
          <div className="dashbox">
                <div className="box section1">
                  <p className="header3 float-l pt-1s left-abs-sm ">Dashboard</p>
                  <div className="float-l mt-5s mb-1s left2-abs-sm" style={{
                      marginTop:'0.7em'
                  }}>
                  <DateScheduler />
                  </div>

                  <input type="text" placeholder="Search" style={{marginRight:'0.8em'}}className="search search-sm" />
                </div>
                <div className="box mb-cont-1">
                  <div className="column-1  ">
                    <div className="dp-boxes red-btm">
                      <span className="caption-txt">
                        <p className="big">
                          1,234
                        </p>
                        <p className="small">
                          Registered Customers
                        </p>
                      </span>
                      <span className="red-li"></span>
                    </div>
                    <div className="dp-boxes grn-btm">
                    <span className="caption-txt">
                        <p className="big">
                          3,456
                        </p>
                        <p className="small">
                          Value of Redemptions
                        </p>
                      </span>
                      <span className="grn-li"></span>
                    </div>
                    <div className="dp-boxes blu-btm ">
                    <span className="caption-txt">
                        <p className="big">
                          3,456
                        </p>
                        <p className="small">
                          Points Redeemed
                        </p>
                      </span>
                      <span className="blu-li"></span>
                    </div>
                    <div className="dp-boxes purp-btm ">
                    <span className="caption-txt">
                        <p className="big">
                          3,456,789
                        </p>
                        <p className="small">
                          Cash Spent (Debit Card)
                        </p>
                      </span>
                      <span className="purp-li"></span>
                    </div>
                  </div>
                  <div className="column-2 ">

                    <div className="display-box">
                      <div className="column-4">
                        <div className="box my-5s underline ">
                          <p className="header4 float-l px-5s">Summary</p>
                          <div className="float-r px-5s">
                              <p className="header5">Month</p>
                              <span className="side-btn">All Time</span>
                          </div>
                        </div>
                        <div className="box ">
                          <div className="px-5s">
                            <div className="column-2">
                              <p className="header5">Lorem Ipsuum</p>
                              <p>123456789</p>

                               <p className="header5 pt-1x">Lorem Ipsuum</p>
                              <p>123456789</p>
                            </div>
                            <div className="column-2">
                            <p className="header5">Lorem Ipsuum</p>
                              <p>123456789</p>

                               <p className="header5 pt-1x">Lorem Ipsuum</p>
                              <p>123456789</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column-4">
                      <span className="red-c"></span>
                      </div>
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
