import React, { useState } from 'react'
import './Home.css'
import I18n from './../../utils/i18n.jsx';

function Home() {
  const [lang, setLang] = useState("mr");
  const userCount = 15;
  return (<>
  <h1>{I18n("welcomeMessage")}</h1>
  <p>{I18n("normalMessage")}</p>
  <h3>{I18n( "greetingMessage")}</h3>
  <h5>{I18n("endMessage")}</h5>

  <select
   defaultValue={localStorage.getItem('lang')} 
   onChange={(e)=>{
    localStorage.setItem('lang',e.target.value);
    window.location.reload();
  }}>
    <option value="mr">Marathi</option>
    <option value="en">English</option>
    <option value="hi">Hindi</option>
  </select>


  <h4>{I18n("userStatusMessage","<studentCount>", userCount)}</h4>
  </>
  )
}

export default Home