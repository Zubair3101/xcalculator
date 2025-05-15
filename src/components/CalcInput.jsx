import React from 'react'

function CalcInput({expression, result}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}S>
        <h1>React Calculator</h1>
        <input type="text" value={expression} readOnly style={{marginBottom: '10px'}}/>
        {result && <p style={{color: 'gery', marginTop: '0px'}}>{result}</p>}
    </div>
  )
}

export default CalcInput