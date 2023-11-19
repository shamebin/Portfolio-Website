import "./topbar.css"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail'; 

function Topbar({ navbarOpen, setNavbarOpen}) {
  return (
    <div className={"topbar " + (navbarOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#contact" className="logo">angelsambun.</a>
              <div className="itemContainer">
                <PersonIcon className="icon"/>
                <span>+6012 345 6789</span>
                <div className="itemContainer">
                <MailIcon className="icon"/>
                <span>angelsambun@gmail.com</span>
                </div>
              </div>
          </div>

          <div className="right">
            <div className="hamburger" onClick={()=>setNavbarOpen(!navbarOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topbar