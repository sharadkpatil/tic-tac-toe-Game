import React from "react";
import { Component } from "react";

class GCC extends Component{
    render(){
        return (
            <div>
                <h2> {this.props.msg}</h2>
                {this.props.children}
            </div>
            
        )
    }
}

export default GCC;