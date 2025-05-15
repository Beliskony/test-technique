import { useState } from 'react'
import './App.css'
import Login from './components/SigninLogin/Login'
import SignIn from './components/SigninLogin/SignIn'
function App() {
  const [activeForm, setActiveForm] = useState<'connexion' | 'Inscription'>('connexion')

  return (
    <section className='flex flex-row justify-center items-center h-screen w-screen gap-x-2'>
      {/*partie de droite */}
      <div className='flex flex-col justify-center w-1/3 h-[90%] items-center gap-y-4 bg-green-700'>
        <h1 className='font-bold text-4xl text-white'>Welcom Back!</h1>
        <p></p>

        <div className='flex flex-row gap-3'>
          <button
            className={`px-4 py-2 rounded ${activeForm === 'connexion' ? 'bg-white text-green-700' : 'bg-green-600 text-white'}`}
            onClick={() => setActiveForm('connexion')}
          >
            Connexion
          </button>
          <button
            className={`px-4 py-2 rounded ${activeForm === 'Inscription' ? 'bg-white text-green-700' : 'bg-green-600 text-white'}`}
            onClick={() => setActiveForm('Inscription')}
          >
            Inscription
          </button>
        </div>

      </div>

      {/*partie de gauche */}
      <div className='flex flex-col justify-center items-center 2/3 h-[90%] bg-white'>
        {activeForm === "connexion" && <Login/>}
        {activeForm === "Inscription" && <SignIn/>}

      </div>

    </section>
  )
}

export default App
