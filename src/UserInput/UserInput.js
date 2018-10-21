import React from 'react';

const userInput = (props) =>{
    const style = {
        border: '2px solid red',
        borderRadius: "4px",
        width : "50%",
        padding: "12px 20px",
        
    };

    return(
        <input  style={style} type="text" onChange={props.changeName} value={props.name}/>
    );
}

export default userInput;