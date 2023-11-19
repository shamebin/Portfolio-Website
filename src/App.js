import Topbar from "./component/topbar/Topbar";
import Menu from "./component/menu/Menu";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Testimonials from "./component/testimonials/Testimonials";
import Contact from "./component/contact/Contact";
import "./app.css"
import { useState } from "react";

function App() {
  const [navbarOpen,setNavbarOpen] = useState(false)
  return (
    <div className="app">
      <Topbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <Menu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <div className="sections">
        <Intro/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
