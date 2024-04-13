import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'

function App() {
  const [themeMode, SetthemeMode ] = useState("light")
  // const [  darkTheme , SetdarkTheme] = useState("dark")
  // const [ lightTheme , SetlightTheme] = useState("light")

  const lightTheme = () => {
    SetthemeMode("light")
  }
  const darkTheme  = () => {
    SetthemeMode("dark")
  }

  //actual change in theme :

  useEffect (()=>{
    document . querySelector('html') .classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  

  return (
    <>
    <ThemeProvider value={{themeMode , darkTheme , lightTheme}}>

    
      
       <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex      justify-end mb-4">
                    <ThemeBtn/>
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                       
                    </div>
            </div>
       </div>
    </ThemeProvider>

    </>
  
  )
}

export default App
