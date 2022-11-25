import React from 'react'

const Home = () => {

    const name = 'Martha'
    const direccion = 'Cala cala'
    const msg =`soy ${name} necesito ayuda mi direccion es ${direccion}`

    const handleHelp = () => {
        window.open(`https://api.whatsapp.com/send/?phone=59176407344&text=${msg}`, '_blank');
    }
    //

  return (
    <div>
        <button onClick={handleHelp}>Ayuda</button>
    </div>
  )
}

export default Home