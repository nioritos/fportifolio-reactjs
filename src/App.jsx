import './css/App.css'
import Head   from './componets/header/Header';
import Home   from './componets/home/Home';
import About   from './componets/about/About';
import Skills  from './componets/skills/skills';
import Footer  from './componets/footer/Footer';
import Projects from './componets/project/projects';
import Services from './componets/services/Services';


function App() {

  return (
    <>
      <Head/>

      <Home/>
      <About/>
      <Projects/>
      <Services/>
      <Skills/>
      <div className="divider-sections"></div>
      <Footer/>
    </>

  )
}

export default App
