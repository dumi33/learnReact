
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/Button.jsx'


function App() {


  const buttonPropsMail = {
    text : "메일",
    color : "blue",
  }
  const buttonPropsCafe = {
    text : "카페",
    color : "blue",
  }
  
  const buttonPropsBlog = {
    text : "블로그",
    color : "blue",
  }

  return (
    <>
      <Button {...buttonPropsMail}/>  
      <Button {...buttonPropsCafe}/>  
      <Button {...buttonPropsBlog}/>  
    </>
  )
}

export default App;
