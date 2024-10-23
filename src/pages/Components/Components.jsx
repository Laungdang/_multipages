import Counter from './Counter/Counter.jsx'
import Timer from './Counter/Timer/Timer.jsx'
import Add from './Counter/Add/Add.jsx'
import Temperatures from './Temperatures/Temperatures.jsx'

import './Components.css';


function Components() {
  return ( 

    <div className='main-container'>
    <div>
      <h1 className="title">REACT&nbsp;COMPONENT</h1>
      <div className='grid-1'>
        <div className='grid-2'>
      <Counter name={"COUNTER"} value={10} />
      </div>
      <Add aValue={10} bValue={19} />
      <div className='grid-4'>
      <Timer />
      </div>
      </div>
      <div className='tem-move'>
      <Temperatures name={'JJ'} initCelsius={20} /> 
      </div>
        
    </div>
    <h3 className='end-title'>นายหลาวแดง อินคำ รหัส 66010639</h3>
  </div>);
}

export default Components;