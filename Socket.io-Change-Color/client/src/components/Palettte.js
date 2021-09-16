import '../App.css';
import { useState } from "react";
import {send} from "../socketApi";

const Palettte = ({active}) => {
const [color, setColor] = useState("#000000")
    return (
        <div className="palette">
            <input className={'input'} type="color" value={active} onChange={(e)=>setColor(e.target.value) }/>
            <button className={'btn'} onClick={()=>send(color)}>Click</button>
            <p>Color:{active}</p>
        </div>
    )
}

export default Palettte
