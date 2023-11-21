import React from 'react'
import './Home.css'

function Home() {
  const userCount = 15;
  return (<>
  <h1>WelCome!</h1>
  <p>We you enjoy learning React.</p>
  <h3>Have a greate day.</h3>
  <h4>{userCount} users are learning this session.</h4>
  </>
    )
}

export default Home