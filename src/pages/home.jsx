import React from 'react'

const Home = () => {

    const handleHelp = () => {
        window.open('http://www.example.com?ReportID=1', '_blank');
    }
    //https://walink.co/82f6f3

  return (
    <div>
        <button onClick={handleHelp}>Ayuda</button>
    </div>
  )
}

export default Home