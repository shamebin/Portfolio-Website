import "./contact.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h3>I'm active on other social medias.</h3>
        <br/>
        <div className="itemContainer">
                <LinkedInIcon className="icon"/>
                <span> Angel Sambun </span>
                
                <div className="itemContainer">
                <YouTubeIcon className="icon"/>
                <span> @codingwithangel </span>
                <div className="itemContainer">
                <TwitterIcon className="icon"/>
                <span> @codingwithangel </span>
          </div>
      </div>
      </div>
      </div>
      <div className="right">
        <h2>Say hi to me here.</h2>
        <form>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact