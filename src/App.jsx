
import './App.css'
import AboutMe from './commponent/AboutMe'
import Banner from './commponent/Banner'
import MyProject from './commponent/MyProject'
import Skils from './commponent/Skils'
import ThreeDBackground from './Shared/GradientBackground'
import Navbar from './Shared/Navbar'

function App() {
 

  return (
 <>
<ThreeDBackground/>
<Navbar /> 
<Banner/>
<Skils/>
<AboutMe/>
<MyProject/>

 </>
  )
}

export default App
