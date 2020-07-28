import React, {useState} from 'react'

import './calculator.styles.css'

export const Calculator = () => {

const [amt, setAmt] = useState(0.00);
const [unit, setUnit] = useState(0);
const [showResults, setShowResults] = useState(false);

const handleSubmit = (e) => {

    e.preventDefault();
   
    if(unit <= 100){
        setAmt(0);
        console.log('100');
    }

    else if(unit <= 200){
        setAmt(unit*1.50 - 130.00);
        console.log('200');
    }

    else if(unit <= 500){
        
        setAmt( 350.00 + ((unit - 200)*3.00) - 120.00);
        console.log('entered <500');
    }
    else{
        setAmt(1880.00 +((unit - 500)*6.60) - 100.00)
    }
    console.log(unit);
    setShowResults(true);
    setUnit(0)
    
}

const handleClick = () => {
    setShowResults(false);
    setAmt(0.00);
    setUnit(0);
}

    return (
        <div className='calculator'>
        {showResults ? <div> <h1>Your EB Bill Amount: &#8377;{amt}</h1> <button className='button' onClick={handleClick}>Calculate again</button></div>
        : <div>
            <p>Enter the amount</p>
            <form onSubmit={handleSubmit} >
                <input placeholder='Enter the units.....' name='units' onChange={event => setUnit(event.target.value)} />
                <button className='button'>Calculate</button>
            </form> 
        </div> }
           
            
            
        </div>
    )
}
