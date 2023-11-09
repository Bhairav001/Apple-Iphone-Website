
import './App.css'
import BatterySection from './sections/BatterySection'
import DesignSection from './sections/DesignSection'
import HeroSection from './sections/HeroSection'
import Quote from './sections/Quote'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
 
  return (
    <>
      <GlobalStyle/>
      <BatterySection/>
      <HeroSection/>
      <DesignSection/>
      <Quote/>
    </>
  )
}

export default App
