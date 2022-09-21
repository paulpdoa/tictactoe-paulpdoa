import { useState } from 'react';

const Button = ({ currentId }) => {

    const [inUse,setInUse] = useState('X');
    // currentType will change when current is X
    const [currentType,setCurrentType] = useState('');

    function getCurrentType(id) {
        // if the clicked button has the same index with the clicked one, then change its value
        // update inUse, if the first player selects, it is X, then change it to O
        if(id === currentId) {
           
            setInUse('O');
            setCurrentType(inUse); // X
            
        }
    }
    console.log(inUse);
    
    return (
        <button onClick={() => getCurrentType(currentId)} className={`game-btn ${currentType === 'X' ? 'cross' : 'circle'}`}>{ currentType }</button>
    )
}

export default Button;