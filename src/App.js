import { useState } from 'react';
import './App.css';
import { Chart } from './components/Chart';
import { MarkForm } from './components/MarkForm';

function App() {

  const [erNo, setErNo]=useState("")
  const [dataSet, setDataSet]=useState([])
  const [isErr, setIsErr]=useState(false)

  const formDataFunction=(...num)=>{

    // console.log(num[0]);
    setErNo(num[0]);

    setDataSet(()=>{
      let data=[...num]
      data.shift()
      return data
    })
    
  }
  return (
    <div className="App">
      <MarkForm formDataFunction={formDataFunction} setIsErr={setIsErr}/>
      {
        isErr || (dataSet.length!==0 && <Chart erNo={erNo} dataSet={dataSet}/>)
      }
      {
        isErr && <div className="isErr"><h1>Please! Fill the Data First....</h1></div>
      }
      
    </div>
  );
}

export default App;
