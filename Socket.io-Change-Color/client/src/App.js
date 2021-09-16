import { useEffect, useState } from 'react';
import './App.css';
import Palettte from './components/Palettte';
import {init, subscribe} from "./socketApi";


function App () { 

  const [active, setActive] = useState('#282c34');

  useEffect(()=>{
    init();
    subscribe((color)=>{
      setActive(color)
    });
  },[])


  return (
    <div className="App" style={{backgroundColor:active}}>
     <Palettte active={active}/>
    </div>
  );
}

export default App;
