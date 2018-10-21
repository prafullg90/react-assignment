import React from 'react';

const userOutput = (props) =>{
        return(
            <div className="cardBoardOutput">
                <p>This is first paragraph contain my name, and My name is {props.name}.</p>
                <p>This is Second paragraph contain my age, and I'am {props.age} years old.</p>
            </div>
        )
}

export default userOutput;