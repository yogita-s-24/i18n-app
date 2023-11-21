import React from 'react'
import './Home.css'
import I18n from '../../utils/i18n';

function Home() {
  const userCount = 15;
  return (<>
  <h1>{I18n("welcomeMessage")}</h1>
  <p>{I18n("normalMessage")}</p>
  <h3>{I18n("greetingMessage")}</h3>

  
  {/* <h4>{userCount} users are learning this session.</h4> */}
  </>
    )
}

export default Home