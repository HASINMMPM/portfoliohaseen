import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import Skils from "./Components/Skils";
import Welcome from "./Components/Welcome";

export default function App() {
  return(
    <div className="max-w-6xl  mx-auto app" >
      <Welcome />;
      <Project/>
      <Resume/>
      <Skils/>
      <Contact/>

    </div>
  )
}
