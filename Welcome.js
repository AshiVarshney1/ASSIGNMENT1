import React from 'react';
function Welcome(props){
    return(
        <div className='wel'>
            <h2>Welcome to College</h2>
            <h1>Hey! , {props.name}</h1>
        </div>
    );
}

export default Welcome;