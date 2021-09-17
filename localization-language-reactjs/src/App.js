import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import './App.css';
import {useState, useEffect} from "react"


const message = {
  'tr-TR':{
title:"Merhaba Dünya",
description:"Çoklu dil seçeneği mevcuttur"
  },
  'en-US':{
    title:"Hello world",
description:"There is multilangıage option"

  }
}

function App() {
const isLocal=localStorage.getItem("local");
const defaultlocal=isLocal? isLocal:navigator.language;

console.log(defaultlocal);
const [local, setLocal] = useState(defaultlocal)



useEffect(() => {
localStorage.setItem("local",local)
}, [local])


  return (
    <div className="App">
      
      <IntlProvider messages={message[local]}locale="tr" defaultLocale="en">
      <p className="text">
      <FormattedMessage className="text" id="title"/>

      </p>

      <br />
      <p className="text">
      <FormattedMessage  id="description"/>

      </p>
        

      </IntlProvider>
      <button className="btn btn-1" onClick={()=>setLocal("tr-TR")}>Türkçe</button>
<button className="btn btn-2" onClick={()=>setLocal("en-US")}>English</button>
    </div>
  );
}

export default App;
