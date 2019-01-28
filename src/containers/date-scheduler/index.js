import React, { Component } from 'react';

export default class DateScheduler extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          field: '',
          value:'',
          showDropDwn:false,
          optsSwitch:0,
          selectVal : '',
          finalVal : 'Today',
          lastVal : ''
      }
    }

    toggleDropdwn() {
        this.setState({
            showDropDwn:!this.state.showDropDwn
        })
    }
    toggleDropdwnApply() {
        this.setState({
            showDropDwn:!this.state.showDropDwn,
            finalVal:this.state.selectVal
        })
    }

    selectOption(u) {
        this.setState({
            optsSwitch:u.index,
            selectVal:u.element
        }, ()=> {
            console.log('set state:', this.state.optsSwitch, this.state.selectVal)
        })

    }
    

  render() {
      let droplist =['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month', 'Custom  Range' ];
        //   selectVal = '';
    return (
      <div className={(this.state.showDropDwn)?"schedule-cont off-toggle2":"schedule-cont  "}>
      <div onClick={this.toggleDropdwn.bind(this)}> 
        <p><span>{this.state.finalVal}</span>{(this.state.finalVal==='Today')?(<span> : 20 Apr</span>):''}</p>
        <div className="schedule-btn" >
            ^
        </div>
      </div>
        <div className="schedule-drop drop">
            <ul className="toplist">
            {droplist.map((e,i) => {
                let u = {
                    element:e,
                    index:i
                }
          return (
            <li key={i} className={(this.state.optsSwitch === i)?'active':''} onClick={this.selectOption.bind(this, u)}>{e}</li>
          )
      })}
            </ul>
            <ul className="downlist">
                <li  onClick={this.toggleDropdwnApply.bind(this)} className="active">Apply</li>
                <li onClick={this.toggleDropdwn.bind(this)}>Cancel</li>
            </ul>
        </div>
      </div>
    )
  }
}