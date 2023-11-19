import "./menu.css"

function Menu({ navbarOpen, setNavbarOpen}) {
  return (
    <div className={"menu "  + (navbarOpen && "active")}>
        <ul>
            <li onClick={()=>setNavbarOpen(false)}> 
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setNavbarOpen(false)}>  
                <a href="#portfolio">Portfolio</a>
            </li>
            {/* <li onClick={()=>setNavbarOpen(false)}> 
                <a href="#works">Works</a>
            </li> */}
            <li onClick={()=>setNavbarOpen(false)}> 
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={()=>setNavbarOpen(false)}> 
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu