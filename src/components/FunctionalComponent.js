import React from "react"


export const FunComponent = (props) => {
    return (
    <div>
        <h2>{props.msg} of {props.name}</h2>        
        {props.children}
    </div>
    
    )
};

//export default Greet