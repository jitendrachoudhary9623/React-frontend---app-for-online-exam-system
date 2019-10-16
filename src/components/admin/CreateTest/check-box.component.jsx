import React, { Component } from 'react';

class CheckBoxComponenet extends Component {
    state = { 
        question:this.props.Question,
        is_checked:this.props.isChecked
     }
    render() { 
        return ( 
            <label>
                <input type="checkbox" 
                    onChange={ (event) => this.handleChange(event) } 
                    className="filled-in"
                    checked={ this.state.is_checked }/>
            <span></span></label>
         );
    }

    handleChange = (event)=>{
        var checked = event.target.checked;
        this.setState({ is_checked: checked });
        console.log(checked);
        this.props.onChange(checked,this.state.question);
    }
}
 
export default CheckBoxComponenet;