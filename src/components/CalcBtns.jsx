import React from 'react'

function CalcBtns({handleClear, handleClick, handleEquals}) {
  
    const calcEle = [7,8,9,'+',4,5,6,'-',1,2,3,'*','C',0,'=','/'];

    return (
    <div style={{width: '230px', marginLeft: '25px'}}> 
        {
            calcEle.map((ele) => (
                <button key={ele} onClick={() => {
                    if(ele === 'C') 
                        handleClear();
                    else if(ele === '=')
                        handleEquals();
                    else    
                        handleClick(ele);
                }} style={{ width: '45px', margin: '3px', height: '40px', borderRadius: '10px', fontSize: '18px', fontWeight: '500'}}>
                    {ele}
                </button>
            ))
        }
    </div>
  )
}

export default CalcBtns